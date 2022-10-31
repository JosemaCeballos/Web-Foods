import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className="logoAndName">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3123/3123321.png"
          alt="logo-food"
          className="logo"
        />
        <span className="nav-logo">Recipes&Diets</span>
      </div>
      <div className="social-logo">
        <a
          href="https://www.linkedin.com/in/jose-maria-ceballos-a3379524a/"
          target="__blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111368.png"
            alt="logo-linkedin"
            className="social-logo"
          />
        </a>
        <a href="https://github.com/JosemaCeballos" target="__blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111290.png"
            alt="logo-github"
            className="social-logo"
          />
        </a>
      </div>
      <div className={`nav-items ${open && "open"}`}>
        <a href="home" className="color-specified">
          <Link to="/home">Home</Link>
        </a>
        <a href="createrecipe" className="color-specified">
          <Link to="/create/recipe">Create Recipe</Link>
        </a>
        <a href="about" className="color-specified">
          <Link to="/about">About</Link>
        </a>
      </div>
      <div
        className={`nav-toggle ${open && "open"}`}
        onClick={() => setOpen(!open)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
