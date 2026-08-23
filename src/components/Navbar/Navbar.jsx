import React from "react";
import { NavLink,Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";
import {navLinks} from "../../common/nav-links"
import CartIcon from "../../assets/icons/CartIcon"
import ThemeToggle from "../ThemeToggle/ThemeToggle";
const Navbar = () => {
  return <>
           <header className="navbar">
              <div className="container navbar-inner">
                <Link to="/" className="logo">
                   <img src={Logo} alt="Nova Logo" className="logo-img"/>
                   <span className="logo-title">NovaTech</span>
                </Link>
                <nav className="nav-links">
                    {
                      navLinks.map((link)=>{
                          <NavLink key={link.id} to={link.href} >
                              {link.label}
                          </NavLink>
                      })
                    }
                    <div className="nav-actions">

                        {/*Theme Toggle Component*/}
                        <ThemeToggle />
                       <Link to="/cart" className="cart-btn">
                            <CartIcon />
                            {/*come back after learning context*/}
                            <span className="cart-count"> 1 </span>
                       </Link>
                       <Link to="/signin" className="btn-ghost">
                          Sign In 
                       </Link>
                       <Link to="/signup" className="btn-primary">
                          Sign Up
                       </Link>

                    </div>
                </nav>
              </div>
           </header>
        </>
};

export default Navbar;
