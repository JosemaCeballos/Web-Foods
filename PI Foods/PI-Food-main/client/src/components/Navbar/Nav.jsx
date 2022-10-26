import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Nav() {
  return (
    <div className="navbar">
      <div className="logoName">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3123/3123321.png"
          alt="logo-food"
          className="logo"
        />
        <h2>Recipe&Diets</h2>
      </div>
      <div>
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
      <nav>
        <ul>
          <li>
            <a href="ignore">
              <Link to="/">Home</Link>
            </a>
          </li>
          <li>
            <a href="ignore">
              <Link to="/recipe/create">Create Recipe</Link>
            </a>
          </li>
          <li>
            <a href="ignore">
              <Link to="/about">About</Link>
            </a>
          </li>
        </ul>
      </nav>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1046/1046747.png"
        alt="menu-logo"
        className="menu-icon"
      />
    </div>
  );
}

export default Nav;
