import ChatCard from "./ChatCard";

const ChatView = ({ chatList }) => {
  return (
    <ul className="h-[500px] w-[250px] balloon text-[#FFFFFF]  text-start mx-auto flex flex-col whitespace-pre-wrap overflow-y-auto text-[14px] font-[JeonjuCraftMjB] font-light pt-2">
      {chatList.length === 0 ? (
        <div className="text-center whitespace-pre-wrap  ">
          {`오늘의 운세를 보고 가세요! 
아래에 생년월일(YYYY-MM-DD)을 
입력하시고 
Today's fortune cookie를 눌러주세요!`}
        </div>
      ) : (
        chatList.map((v, i) => (
          <div className="">
            <ChatCard key={i} answer={v.answer} question={v.question} />
          </div>
        ))
      )}
    </ul>
  );
};
export default ChatView;
