import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-footer">
        <div className="item-footer">
          <h1>Categorias</h1>
          <p>Mujer</p>
          <p>Hombre</p>
          <p>Niños</p>
          <p>Calzado</p>
          <p>Accesorios</p>
          <p>Novedades</p>
        </div>
        <div className="item-footer">
          <h1>Links</h1>
          <p>Preguntas Frecuentes</p>
          <p>Paginas</p>
          <p>Tiendas</p>
          <p>Comparar</p>
          <p>Cookies</p>
        </div>
        <div className="item-footer">
          <h1>Sobre JMR</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate blanditiis quod amet minima commodi, ipsa ad modi qui distinctio. Sint illo ullam at inventore nemo vel? Nesciunt omnis autem iusto!</p>
        </div>
        <div className="item-footer">
          <h1>Contacto</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aut reiciendis voluptas tempora laudantium maxime molestias, fugiat facilis accusantium eius vel amet ab temporibus natus nobis recusandae maiores, assumenda perspiciatis.</p>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="left-footer">
          <img className="logo" src="/img/logo.png" alt="jmr logo" />
          <p>© Copyright 2023. All Rights Reserved</p>
        </div>
        <div className="right">
          <img className="payment-logo" src="/img/payment.png" alt="payment methods" />
        </div>
      </div>
    </div>
  );
};

export { Footer };
