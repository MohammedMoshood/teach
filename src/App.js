import "./App.css";
import { useState } from "react";
import Cart from "./pages/Cart";
import "bootstrap/dist/css/bootstrap.css";
import Todo from "./pages/Todo";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth} setAuth={setIsAuth} />} />

      <Route
        path="/cart"
        element={
          <PrivateRoute isAuth={isAuth}>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
