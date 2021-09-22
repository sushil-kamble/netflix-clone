import React, { useState, useEffect } from "react";
import "../css/nav.css";
import netflix from "../img/netflix.png";
import avatar from "../img/avatar.png";

function Nav() {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else setshow(false);
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img src={netflix} alt="netflix logo" className="logo_net" />
      <img src={avatar} alt="netflix logo" className="logo_av" />
    </div>
  );
}

export default Nav;
