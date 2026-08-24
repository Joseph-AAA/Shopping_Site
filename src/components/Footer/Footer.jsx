import React from "react";
import logo from "../../assets/logo.png"
import "./Footer.css"
const Footer = () => {
  return <footer className="footer-container">
              <div className="footer-grid">
                  <div className="">
                    <div className="footer-logo">
                      <img className ="logo-img" src={logo} alt="logo"/>
                       <h4 className="logo-title">NovaTech</h4>
                    </div>
                    <p className="footer-text">Premium tech gadgets for creators, 
                                               gamers and everyday explorers.</p>
                  </div>
                  <div>
                      <h4>SHOP</h4>
                      <ul>
                          <a href="/shop">All Products</a>
                          <a href="/categories">Categories</a>
                          <a href="/cart">Cart</a>
                      </ul>
                  </div>
                  <div>
                      <h4>COMPANY</h4>
                      <ul>
                          <a href="/about">About</a>
                          <a href="/contact">Contact</a>
                        
                      </ul>
                  </div>
                  <div>
                      <h4>ACCOUNT</h4>
                      <ul>
                          <a href="signin">Sign In</a>
                          <a href="signup">Sign Up</a>
                       
                      </ul>
                  </div>
              </div>
              <div className="footer-bottom">
                  <p>© 2026 NovaTech. All rights reserved.</p>
                  <p>Built by Learnex & Leaners</p>
              </div>
         </footer>;
};

export default Footer;
