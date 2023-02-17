import React from "react";
import "./Cart.css";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

/*PROBLEM RESPONSIVE*/

const DATA = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Long Sleeve Graphic T-shirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iste sapiente quod tempore? Cupiditate, explicabo omnis.",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Coat",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iste sapiente quod tempore? Cupiditate, explicabo omnis.",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
];

const Cart = () => {
  return (
    <div className="cart">
      <h1>My order</h1>
      {DATA?.map((item) => (
        <div className="cart-item" key={item.id}>
          <img className="cart-img" src={item.img} alt={item.title} />
          <div className="cart-details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 50)}</p>
            <div className="cart-price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="cart-delete" />
        </div>
      ))}
      <div className="cart-total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <div className="cart-buttons-container"> 
        <button className="cart-button">CHECKOUT</button>
      <span className="cart-reset">Reset Cart</span>
      </div>
    </div>
  );
};

export { Cart };
