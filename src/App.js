import "./components/Animations/Animations.css";
import "./components/MediaScreen/MediaScreen.css";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Uploads from "./components/Uploads/Uploads";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import SignIn from "./components/Sign/SignIn";
import Footer from "./components/Footer/Footer";
import FullDesign from "./components/Designs/FullDesign";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="designs" element={<FullDesign />} />
        <Route path="uploads" element={<Uploads />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="accounts" element={<SignIn />} />
        <Route path="/" element={<Footer />} />
      </Route>
    </Routes>
  );
}

export default App;
