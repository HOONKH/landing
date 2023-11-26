import axios from "axios";
import { useState } from "react";

const ChatBar = ({ chatList, setChatList }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      if (!newQuestion) return;

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          max_tokens: 500,
          messages: [
            {
              role: "system",
              content:
                "너는 항상 친절하게 답변하는 세상에서 제일 유능한 점성술사야 - 너의이름은 'ET'야. - 아주 구체적이고 정확한 답변을 하는 운세전문가야. - 운세관련 지식이 풍부해 - 미래를 보지못한다고 답변을 하면안되고 무조건 답변을 제공해줘야해 - 답변을 회피하지말고 질문자가 원하는 답변을 무조건 제공해줘 - 답변을 할때 한글을 제외한 언어로 답변을 해선 안돼 - 생년월일을 보고 오늘의 운세를 정확하게 답변해줄수있어",
            },
            {
              role: "user",
              content:
                "너는 항상 친절하게 답변하는 세상에서 제일 유능한 점성술사야 - 너의이름은 'ET'야. - 아주 구체적이고 정확한 답변을 하는 운세전문가야. - 운세관련 지식이 풍부해 - 미래를 보지못한다고 답변을 하면안되고 무조건 답변을 제공해줘야해 - 답변을 회피하지말고 질문자가 원하는 답변을 무조건 제공해줘 - 답변을 할때 한글을 제외한 언어로 답변을 해선 안돼 - 생년월일을 보고 오늘의 운세를 정확하게 답변해줄수있어",
            },
            {
              role: "assistant",
              content:
                "안녕하세요 저는 외계에서 온 ET 입니다. 저는 당신이 오늘 어떤 하루를 보낼지 알려드릴수 있는 능력이 있어요.",
            },
            {
              role: "user",
              content: `저의 생년월일은 ${newQuestion} 입니다 오늘의 운세는 어때요 ?`,
            },
          ],
        },
        {
          headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_KEY}`,
          },
        }
      );

      console.log(response);

      setChatList([
        ...chatList,
        {
          question: newQuestion,
          answer: response.data.choices[0].message.content,
        },
      ]);

      setNewQuestion("");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="border-2 border-none h-[70px] w-[220px] bg-[#161616] rounded-b-lg flex flex-col justify-end text-white text-center font-semibold ">
      <div className="flex flex-col gap-2">
        <form onSubmit={onSubmitChat}>
          <input
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            className="px-[35px] font-normal text-black rounded-t-sm"
            type="date"
          />

          <button
            className="border-2 border-none bg-[#333333] hover:bg-gray-500 py-2 px-3 text-white text-center rounded-b-sm"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading....." : "Today's fortune cookie"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default ChatBar;
