import React, { Component } from "react";

//images
import navLogo from "../../assets/svg/fashion-logo.svg";
import Button from "../button/button";
import headerPhoto from "../../assets/images/fashion-gitl.png";
// import bg from "../../assets/images/fashion-bg.png";

import "./header.scss";

class Header extends Component {
  render() {
    return (
      <>
        <section className="navbar">
          <img className="navbar__navLogo" src={navLogo} alt="" />
          <div className="navbar__links">
            <a href="#1">Products</a>
            <a href="#2">Shop</a>
            <a href="#3">Collection</a>
            <a href="#4">About Us</a>
            <a href="#5">Contact</a>
          </div>
          <div className="navbar__icons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-user"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-cart-shopping cart"></i>
          </div>
          <i className="fa-solid fa-bars hamburger"></i>
        </section>

        <section className="header">
          <div className="header__info">
            <p>New Arrival</p>
            <h1>New Fashion Collection Trends in 2022</h1>
            <h3>
              Whether you're in the mood for fashion tricks, outfit ideas,
              industry news, celebrity street style, simply want to know latest
              styles.
            </h3>
            <Button content="Shop Now" />
          </div>
          <div className="header__photo">
            <img className="header__photo__img" src={headerPhoto} alt="" />
          </div>
        </section>
      </>
    );
  }
}

export default Header;
