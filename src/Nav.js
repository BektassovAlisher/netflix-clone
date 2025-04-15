import React, { useEffect, useState } from "react";
import "./Nav.css";
import { tab } from "@testing-library/user-event/dist/cjs/convenience/tab.js";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const [show, handleShow] = useState(false);

  const history = useNavigate()



  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
        onClick={() => history("/")}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        />
        <img
        onClick={() => history("/profile")}
          className="nav__avatar"
          src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
        />
      </div>
    </div>
  );
};

export default Nav;
