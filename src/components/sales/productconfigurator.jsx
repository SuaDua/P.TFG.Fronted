import React, { useState } from "react";
import cars from "../services/Content_API"; // Importa cars (no products ahora)
import "../styles/productconfigurator.css";

const ProductConfigurator = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");
  const [selectedFuelType, setSelectedFuelType] = useState(""); // 👈 fuelType
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilter = () => {
    const recommendations = cars.filter(
      (product) =>
        (selectedColor ? product.color === selectedColor : true) &&
        (selectedFeature ? product.feature === selectedFeature : true) &&
        (selectedFuelType ? product.fuelType === selectedFuelType : true) && // 👈 fuelType
        (selectedTransmission ? product.transmission === selectedTransmission : true) &&
        (selectedYear ? product.year === parseInt(selectedYear) : true)
    );
    setFilteredProducts(recommendations);
  };

  return (
    <div className="configurator-container">
      <h2>Configura tu Vehículo</h2>

      {/* Color */}
      <label>Selecciona un color:</label>
      <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
        <option value="">Cualquiera</option>
        <option value="rojo">Rojo</option>
        <option value="azul">Azul</option>
        <option value="negro">Negro</option>
        <option value="blanco">Blanco</option>
        <option value="gris">Gris</option>
        <option value="gris metalizado">Gris metalizado</option>
        <option value="rojo oscuro">Rojo oscuro</option>
      </select>

      {/* Característica */}
      <label>Selecciona una característica:</label>
      <select value={selectedFeature} onChange={(e) => setSelectedFeature(e.target.value)}>
        <option value="">Cualquiera</option>
        <option value="deportivo">Deportivo</option>
        <option value="familiar">Familiar</option>
        <option value="lujo">Lujo</option>
        <option value="compacto">Compacto</option>
        <option value="económico">Económico</option>
        <option value="ejecutivo">Ejecutivo</option>
      </select>

      {/* Tipo de Combustible */}
      <label>Selecciona el tipo de motor:</label>
      <select value={selectedFuelType} onChange={(e) => setSelectedFuelType(e.target.value)}>
        <option value="">Cualquiera</option>
        <option value="gasolina">Gasolina</option>
        <option value="diesel">Diésel</option>
        <option value="electrico">Eléctrico</option>
        <option value="hibrido">Híbrido</option>
      </select>

      {/* Transmisión */}
      <label>Selecciona la transmisión:</label>
      <select value={selectedTransmission} onChange={(e) => setSelectedTransmission(e.target.value)}>
        <option value="">Cualquiera</option>
        <option value="manual">Manual</option>
        <option value="automatica">Automática</option>
      </select>

      {/* Año */}
      <label>Selecciona el año del modelo:</label>
      <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        <option value="">Cualquiera</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>

      <button onClick={handleFilter} className="filter-button">Buscar Vehículos</button>

      {/* Resultado */}
      <div className="recommendations">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="recommendation-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p><strong>Precio:</strong> {product.price} €</p>
              <p><strong>Color:</strong> {product.color}</p>
              <p><strong>Característica:</strong> {product.feature}</p>
              <p><strong>Tipo de Motor:</strong> {product.fuelType}</p> {/* Mostrar fuelType */}
              <p><strong>Transmisión:</strong> {product.transmission}</p>
              <p><strong>Año:</strong> {product.year}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron vehículos con la configuración seleccionada.</p>
        )}
      </div>
    </div>
  );
};

export default ProductConfigurator;