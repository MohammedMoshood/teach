import "./App.css";
import Cart from "./components/cart/Cart";
import Nav from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <Nav />
      <Cart />
      <Todo/>
    </div>
  );
}

export default App;
