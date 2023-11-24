import { Link } from "react-router-dom";
import Video from "../components/Video";

const main = () => {
  return (
    <div className="min-h-screen text-white flex justify-center items-center flex-col gap-5">
      <Video />
      HI THERE
      <div className="flex gap-5">
        <button className="border-2 border-none px-2 bg-[#3F833F] hover:bg-green-400">
          <Link to="/benjerry">BEN&JERRY</Link>
        </button>
        <button className="border-2 border-none px-2 text-black bg-[#fff200] shadow-2xl shadow-[#3f833f] hover:bg-yellow-100">
          <Link to="/wafflehouse">WAFFLEHOUSE</Link>
        </button>
      </div>
    </div>
  );
};
export default main;
