import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Wafflehouse = () => {
  return (
    <div>
      <button className="text-5xl text-[#fff200]">
        {" "}
        <Link to="/.">
          <AiFillHome />
        </Link>
      </button>
      <span className="font-black text-[#fff200]">HOME</span>
      <iframe
        title="wafflehouse"
        className="w-[1920px] h-[935px] object-cover -z-10 top-0 left-0 fixed"
        src="https://wafflehouse.vercel.app/"
        frameborder="0"
      ></iframe>
    </div>
  );
};
export default Wafflehouse;
