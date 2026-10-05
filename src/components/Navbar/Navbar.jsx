import { NavLink,Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";
import {navLinks} from "../../common/nav-links"
import CartIcon from "../../assets/icons/CartIcon"
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import MenuIcon from "../../assets/icons/MenuIcon";
import Menu from "../Menu/Menu";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import Avatar from "../Avatar/Avatar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

   const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
   const handleOpenMenu = ()=>{
       setOpenMenu (true);
   }
   const handleCloseMenu = ()=>{
      setOpenMenu(false);
   }

   const {auth} = useAuth();

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
                          return <NavLink key={link.href} to={link.href} >
                              {link.label}
                          </NavLink>
                      }) }
                </nav>
                  <div className="nav-actions">

                        {/*Theme Toggle Component*/}
                        <ThemeToggle />
                       <Link to="/cart" className="cart-btn">
                            <CartIcon />
                            {/*come back after learning context*/}
                            <span className="cart-count"> 1 </span>
                       </Link>


                       {
                           auth.isAuthenticated ? <Avatar /> : <div  className="auth-buttons">
                                                                   <Link to="/signin" className=" btn-ghost">
                                                                         Sign In 
                                                                    </Link>
                                                                    <Link to="/signup" className="btn-primary">
                                                                         Sign Up
                                                                    </Link> 
                                                                    
                                                                        
                                                                     
                                                               </div>
                           
                           
                       }
                       



                       <button className="menu-toggle" onClick={handleOpenMenu}>
                           <MenuIcon />
                      </button>
                  </div>
                
                  
              </div>
           </header>
             <Menu openMenu={openMenu} handleCloseMenu={handleCloseMenu}/>
        </>
};

export default Navbar;
