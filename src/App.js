import "./components/Animations/Animations.css";
import "./components/MediaScreen/MediaScreen.css";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Uploads from "./components/Uploads/Uploads";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FullDesign from "./components/Designs/FullDesign";
import Authentication from "./components/Authentication/Authentication";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="designs" element={<FullDesign />} />
        <Route path="uploads" element={<Uploads />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/" element={<Footer />} />
      </Route>
    </Routes>
  );
}

export default App;
