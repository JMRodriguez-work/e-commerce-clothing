import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ListProducts } from "../../components";
import "./Products.css";

const Products = () => {
  const categoryID = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="products__left">
        <div className="products__left-filter">
          <h2>Product Categories</h2>
          <div className="__input-item">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Hat</label>
          </div>
          <div className="__input-item">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">T-Shirt</label>
          </div>
          <div className="__input-item">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Shoes</label>
          </div>
        </div>
        <div className="products__left-filter">
          <h2>Filter by Price</h2>
          <div className="__input-item">
            <span>$0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>${maxPrice}</span>
          </div>
        </div>
        <div className="products__left-filter">
          <h2>Sort by</h2>
          <div className="__input-item">
            <input
              type="radio"
              id="lowPrice"
              value="lowPrice"
              name="price"
              onChange={(e) => setSort("lowPrice")}
            />
            <label htmlFor="lowPrice">Price (Lowest First)</label>
          </div>
          <div className="__input-item">
            <input
              type="radio"
              id="highPrice"
              value="highPrice"
              name="price"
              onChange={(e) => setSort("highPrice")}
            />
            <label htmlFor="highPrice">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="products__right">
        <img
          className="categoryImg"
          src="https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="category"
        />
        <ListProducts categoryID={categoryID} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export { Products };
