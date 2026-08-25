import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { navLinks } from "../../common/nav-links";
import { NavLink } from "react-router-dom";
import "./Menu.css";
const Menu = ({handleCloseMenu,openMenu}) => {
  return <>
            <section className={`menu-links-con ${openMenu && "open" }`}>
              <button className="close-btn" onClick={handleCloseMenu}>
                X
              </button>
              <h1 className="heading">
                  Nova Tech
              </h1>
              {
                navLinks.map((link)=>{
                  return <NavLink onClick={handleCloseMenu} key={link.id} to={link.href} className="link-con">
                            {link.label}
                         </NavLink>
                })
              }
              <NavLink className="link-con" to="/signin">
                  Sign In
              </NavLink>
              <NavLink className="link-con" to="/signup">
                  Sign Up
              </NavLink>
              <ThemeToggle />
            </section>
            <div onClick={handleCloseMenu} className={`overlay ${openMenu && "overlay-open"}`}></div>
        </>;
};

export default Menu;
