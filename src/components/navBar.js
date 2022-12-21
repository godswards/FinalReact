import React from "react";


// import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="m-2 float-center">
          <h3 className="logo text-white px-5 m-2 float-center">Gogo</h3>
        </div>
        <div>
          <div className="btn btn-outline-primary ms-3 btn-sm" to="/">Home</div>
          <div className="btn btn-outline-primary ms-3 btn-sm" to="/venues">Venues</div>
          <div className="btn btn-outline-primary ms-3 btn-sm" to="/blogs">Blogs</div>
          <div className="btn btn-outline-primary ms-3 btn-sm me-5" to="/about">About</div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Navbar;
