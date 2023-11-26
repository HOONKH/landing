import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

import Benjerry from "./pages/benjerry";
import Wafflehouse from "./pages/wafflehouse";
import Et from "./pages/et";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/benjerry" element={<Benjerry />} />
        <Route path="/wafflehouse" element={<Wafflehouse />} />
        <Route path="/Et" element={<Et />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
