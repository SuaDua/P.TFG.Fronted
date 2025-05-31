import React from 'react';
import '../styles/carcard.css';

const CarCard = ({ car }) => {
  const isOffer = car.price < 20000; // 🔥 Si el coche cuesta menos de 20,000€, es una oferta.

  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} width="150" />
      <h3>{car.name}</h3>
      <p style={{ color: isOffer ? 'red' : 'black' }}>Precio: {car.price.toLocaleString()}€</p>

      {/* 🔥 Mostrar la etiqueta de oferta solo si es una oferta */}
      {isOffer && <span className="tag-offer">🔥 Oferta</span>}
    </div>
  );
};

export default CarCard;