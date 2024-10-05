import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import NavbarComponent from "./components/Navbar";
import { RecoilRoot } from "recoil";
import OrderHistory from "./pages/OrderHistory";

import FinalOrder from "./pages/FinalOrder";
function App() {

  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/finalOrder" element={<FinalOrder />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;