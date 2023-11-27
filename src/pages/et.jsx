import { useState } from "react";
import ChatBar from "../components/ChatBar";
import ChatView from "../components/ChatView";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Et = () => {
  const [chatList, setChatList] = useState([]);

  return (
    <div className="min-h-screen flex justify-end pb-10 items-center flex-col ">
      <button className="text-5xl">
        <Link to="/.">
          <AiFillHome />
        </Link>
      </button>
      <span className="font-bold ">HOME</span>
      <ChatView chatList={chatList} />
      <ChatBar chatList={chatList} setChatList={setChatList} />
      <img
        className="fixed top-0 left-0 w-full h-full -z-10 object-contain bg-[#231F20] "
        src="./images/fortunehand.jpg"
        alt="et"
      />
    </div>
  );
};
export default Et;
