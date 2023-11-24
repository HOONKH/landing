import axios from "axios";
import { useEffect, useState } from "react";

const Benjerry = () => {
  const [web, setWeb] = useState(null);

  useEffect(() => {
    const response = axios.get("https://benjerry-clone.vercel.app/");

    setWeb(response.data);
  }, []);

  if (!web) {
    return <div>...Loading</div>;
  }

  return <div>{web}</div>;
};
export default Benjerry;
