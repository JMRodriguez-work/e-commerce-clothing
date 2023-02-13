import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ item }) => {
  return (
    <Link to={`product/${item.id}`}>
      <div className='card'>
          <div className="image-card">
            {!!item.isNew && (
              <span>New Season</span>
            )}
            <img src={item.img} className='mainImg' alt='fashion clothing' />
            <img src={item.img2} className='secondImg' alt='fashion clothing' />
          </div>
          <h2>{item.title}</h2>
          <div className="prices">
            <h3>${item.oldPrice}</h3>
            <h3>${item.price}</h3>
          </div>
      </div>
    </Link>
  )
}

export { Card }