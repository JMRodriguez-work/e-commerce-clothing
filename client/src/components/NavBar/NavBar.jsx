import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import argflag from "/img/arg-flag.png";
import engflag from "/img/en.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import "./NavBar.css";


//IMPLEMENT FINAL STEPS FOR RESPONSIVE DESIGN
const NavBar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div className="left">
          <div className="item">
            <img src={argflag} alt="spanish argentina" width={30} height={18} />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <p>ARS</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/products/1">Mujer</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Hombre</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Niños</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">JMR TIENDA</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="">Inicio</Link>
          </div>
          <div className="item">
            <Link to="">Sobre JMR</Link>
          </div>
          <div className="item">
            <Link to="">Contacto</Link>
          </div>
          <div className="item">
            <Link to="">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cart-icon">
              <ShoppingCartOutlinedIcon className="icon-shopcart" />
              <span>0</span>
            </div>
          </div>
        </div>
        <div className={Mobile ? "mobile-menu" : "mobile-menu inactive"}>
          
            <Link to="/products/1">Mujer</Link>
            <Link to="/products/2">Hombre</Link>
            <Link to="/products/3">Niños</Link>
          
        </div>
      </div>
    </div>
  );
};

export { NavBar };
