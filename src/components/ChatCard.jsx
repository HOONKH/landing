const ChatCard = ({ answer }) => {
  return (
    <li className="w-[200px] h-[200px] flex flex-col items-start justify-start text-white px-1 py-1 ">
      <li className=" text-white ">{answer}</li>
    </li>
  );
};
export default ChatCard;
