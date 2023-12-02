import { Link } from "react-router-dom";
import profilepic from "../image/watch.jpeg";
const Nav = () => {
  return (
    <nav>
      <span className="logo">
        GOMYC<span className="logo_o">O</span>DE
      </span>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          Home
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/cart">
          Cart
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/todo">
          Todo{" "}
        </Link>
      </div>
      <img src={profilepic} alt="" />
    </nav>
  );
};
export default Nav;
