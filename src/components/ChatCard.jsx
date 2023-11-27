const ChatCard = ({ answer }) => {
  return (
    <li className="w-[200px] h-[200px] flex flex-col items-center justify-start text-[#FFFFFF]  pl-10 py-1 ">
      <img
        className="w-[100px] h-[160px] rounded-3xl border-2 border-none"
        src="./images/fortunecard.jpg"
        alt=""
      />
      <li className=" text-white ">{answer}</li>
    </li>
  );
};
export default ChatCard;
