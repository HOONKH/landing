import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

import Benjerry from "./pages/benjerry";
import Wafflehouse from "./pages/wafflehouse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/benjerry" element={<Benjerry />} />
        <Route path="/wafflehouse" element={<Wafflehouse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
