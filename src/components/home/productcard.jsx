import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/products.css';

const ProductCard = ({ car }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/car/${car._id}`); // ✅ Usamos _id de MongoDB
  };

  return (
    <div className="car-card">
      <img src={car.image} alt={`${car.brand} ${car.model}`} width="150" />
      <h3>{car.brand} {car.model}</h3>
      <p><strong>Precio:</strong> {car.price} €</p>
      <button onClick={handleDetailsClick}>
        Detalles
      </button>
    </div>
  );
};

export default ProductCard;