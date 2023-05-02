import "./App.css";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./screen/MyOrder";
function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/create-user" element={<Signup />}></Route>
        <Route path="/myOrder" element={<MyOrder />}></Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
