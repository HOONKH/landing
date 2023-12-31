import { Link } from "react-router-dom";
import Video from "../components/Video";
import "animate.css";

const main = () => {
  const date = new Date();
  const endDate = new Date("2024-02-29");
  const dDay = date - endDate;
  const setOurDday = Math.floor(dDay / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen text-white flex justify-center items-center flex-col gap-5 whitespace-pre-wrap">
      <Video />
      {`When everything seems to 
    be going against you,
      remember that the
  airplane takes off against 
     the wind, not with it 
          -Henry Ford`}
      <span className="animate__animated animate__zoomIn text-3xl">{`블체스 D${setOurDday} `}</span>
      <div className="flex gap-5">
        <button className="border-2 border-none px-2 bg-[#3F833F] hover:bg-green-600 animate__animated animate__slideInUp">
          <Link to="/benjerry">BEN&JERRY</Link>
        </button>
        <button className="border-2 border-none px-2 text-black bg-[#fff200] shadow-2xl shadow-[#3f833f] hover:bg-yellow-100 animate__animated animate__slideInUp">
          <Link to="/wafflehouse">WAFFLEHOUSE</Link>
        </button>
      </div>
      <div className="flex gap-4">
        <button className="border-2 border-none px-2 text-black bg-white shadow-2xl shadow-[#3f833f] hover:bg-gray-200  animate__animated animate__slideInUp">
          <Link to="/et">Fortune Teller</Link>
        </button>
        <button className="border-2 border-none px-2 text-white bg-black shadow-2xl shadow-[#3f833f] hover:bg-gray-700  animate__animated animate__slideInUp">
          <Link to="/nft">My NFT page</Link>
        </button>
      </div>
    </div>
  );
};
export default main;
