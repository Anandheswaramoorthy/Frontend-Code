import Navbar from "./Components/Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Kodnest</h1>

      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}