import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <br />

      <Link to="/about">About</Link>
      <br />

      <Link to="/contact">Contact</Link>
    </div>
  );
}