import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/buycar.css";
import cars from "../services/Content_API";

const BuyCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === parseInt(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Compra realizada con éxito.");
    navigate("/");
  };

  if (!car) {
    return <h2>Coche no encontrado</h2>;
  }

  return (
    <div className="buy-car-container">
      <h2>Formulario de Compra - {car.name}</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo</label>
        <input type="text" required />

        <label>Email</label>
        <input type="email" required />

        <label>Dirección de Envío</label>
        <input type="text" required />

        <label>Método de Pago</label>
        <select required>
          <option value="tarjeta">Tarjeta</option>
          <option value="paypal">PayPal</option>
        </select>

        <button type="submit" className="confirm-button">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default BuyCar;