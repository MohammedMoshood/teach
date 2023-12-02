import Nav from "../components/Navbar";
const Home = ({ setAuth, isAuth }) => {
  return (
    <>
      <Nav />
      <div>Home</div>
      <button
        onClick={() => {
          setAuth(!isAuth);
          alert(`${isAuth ? "Logout" : "Login"} successful`);
        }}
      >
        {isAuth ? "Logout" : "Login"}
      </button>
    </>
  );
};

export default Home;
