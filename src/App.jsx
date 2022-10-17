import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Primary from "./common/layouts/Primary";
import Home from "./pages/Home";
import Secondary from "./common/layouts/Secondary";
import Menu from "./pages/Menu";
import Locate from "./pages/Locate";
import About from "./pages/About";
import Portal from "./pages/Portal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="home" />} />
          <Route path="" element={<Primary />}>
            <Route path="home" element={<Home />} />
            <Route path="menu">
              <Route index element={<Navigate to="foods" />} />
              <Route path="" element={<Secondary />}>
                <Route path="foods" element={<Menu type="FOOD" />} />
                <Route path="sides" element={<Menu type="SIDE" />} />
                <Route path="sauces" element={<Menu type="SAUCE" />} />
                <Route path="drinks" element={<Menu type="DRINK" />} />
                <Route path="desserts" element={<Menu type="DESSERT" />} />
              </Route>
            </Route>
            <Route path="locate" element={<Locate />} />
            <Route path="about" element={<About />} />
            <Route path="portal" element={<Portal />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
