import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/cardetails.css";

const CarDetails = () => {
  const { id } = useParams(); // este id debe ser el _id real del coche
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/cars/${id}`);
        if (!res.ok) throw new Error("Error al obtener el coche");
        const data = await res.json();
        setCar(data);
      } catch (error) {
        console.error("❌ Error al cargar coche:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  const handleBuy = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("❌ Debes iniciar sesión para comprar");
        return;
      }

      const response = await fetch("http://localhost:5000/api/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          seller_id: car.seller_id,
          car_id: car._id,
          price: car.price,
          payment_method: "Transferencia"
        })
      });

      if (!response.ok) throw new Error("Error al generar factura");

      const data = await response.json();
      alert("✅ Factura generada correctamente");
      console.log("Factura generada:", data);
    } catch (error) {
      console.error("❌ Error:", error.message);
      alert("❌ No se pudo generar la factura");
    }
  };

  if (loading) return <h3 style={{ textAlign: "center" }}>Cargando coche...</h3>;
  if (!car) return <h2 style={{ textAlign: "center", color: "red" }}>❌ Coche no encontrado</h2>;

  return (
    <div className="car-details">
      <img src={car.image} alt={car.brand + " " + car.model} className="details-image" />
      <h2>{car.brand} {car.model}</h2>
      <p><strong>Precio:</strong> {car.price} €</p>
      <p><strong>Año:</strong> {car.year}</p>
      <p><strong>Kilometraje:</strong> {car.mileage} km</p>
      <p><strong>Combustible:</strong> {car.fuel_type}</p>
      <p><strong>Transmisión:</strong> {car.transmission}</p>
      <p><strong>Ubicación:</strong> {car.location}</p>
      <p><strong>Estado:</strong> {car.status}</p>
      <button className="back-button" onClick={() => navigate(-1)}>🔙 Volver</button>
      <div className="button-group">
        <button className="buy-button" onClick={handleBuy}>🛒 Comprar</button>
      </div>
    </div>
  );
};

export default CarDetails;