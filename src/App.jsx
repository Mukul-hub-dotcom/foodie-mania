import "./App.css";
import Home from "./screen/Home";
import Login from "./screen/Login";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="fs-1">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

      </Routes>
    </div>
  )

}

export default App;
