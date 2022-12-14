
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Authentication from "./components/Authentication/Authentication";
import CheckOut from "./components/CheckOut/CheckOut";
import Shop from "./components/Shop/Shop";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="cart" element={<Cart />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route index element={<Footer />} />
      </Route>
    </Routes>
  );
}

export default App;
