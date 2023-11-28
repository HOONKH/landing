import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nft = () => {
  return (
    <div>
      <button className="text-5xl">
        <Link to="/.">
          <AiFillHome />
        </Link>
      </button>
      <span className="font-bold">HOME</span>
      <iframe
        title="mynftpage"
        className="w-[1920px] h-[920px] object-cover -z-10 top-0 left-0 fixed"
        src="https://my-nft-page-alpha.vercel.app/"
      ></iframe>
    </div>
  );
};
export default Nft;
