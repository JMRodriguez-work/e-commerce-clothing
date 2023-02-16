import React, { useState } from "react";
import "./Product.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const IMAGES = [
  "https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="product-left">
        <div className="product-left__images">
          <img
            className="pleft-small-img"
            src={IMAGES[0]}
            alt="black t-shirt"
            onClick={(e) => setSelectedImage(0)}
          />
          <img
            className="pleft-small-img"
            src={IMAGES[1]}
            alt="black t-shirt"
            onClick={(e) => setSelectedImage(1)}
          />
        </div>
        <div className="product-left__mainImg">
          <img
            className="pleft-main-img"
            src={IMAGES[selectedImage]}
            alt="black t-shirt"
          />
        </div>
      </div>
      <div className="product-right">
        <h1>Title</h1>
        <span className="product-price">$200</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          fugiat asperiores, culpa explicabo incidunt veniam vitae nihil est
          molestias! Labore quia nisi blanditiis, magnam obcaecati accusamus
          laborum quaerat illum maiores.
        </p>
        <div className="product-right__quantity">
          <button
            className="quantity-button"
            disabled={quantity <= 1}
            onClick={() => setQuantity((prev) => prev - 1)}
          >
            -
          </button>
          {quantity}
          <button
            className="quantity-button"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button className="add-button">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="product-links">
          <div className="link-item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="link-item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="product-info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="product-info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export { Product };
