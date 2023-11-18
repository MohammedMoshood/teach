import profilepic from "../image/watch.jpeg";
const Nav = () => {
  return (
    <nav>
      <span className="logo">
        GOMYC<span className="logo_o">O</span>DE
      </span>
      <img src={profilepic} alt="" />
    </nav>
  );
};
export default Nav;
