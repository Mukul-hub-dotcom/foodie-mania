import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import Modal from "../Modal";
import Cart from "../screen/Cart";
import { useCart } from "./ContextReducer";


function Navbar() {
  const [cartView, setCartView] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
  };
  let data=useCart()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-purple">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            FoodieMania
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/myOrder"
                  >
                    My orders
                  </Link>
                </li>
              ) : (
                " "
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>

                <Link
                  className="btn bg-white text-success mx-1"
                  to="/create-user"
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                <Link onClick={()=>setCartView(true)} className="btn bg-white text-success mx-1" >
                  My Cart{" "}
                  <Badge pill bg="danger">
                    {data?.length>0?<div>{data.length}</div>:null}
                  </Badge>
                </Link>
                {cartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
                <Link
                  className="btn bg-white text-danger mx-1"
                  to="/login"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
