import React, { useState } from "react";
import products from "../services/Content_API"; // ✅ Importación correcta
import "../styles/productcomparison.css";

const ProductComparison = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // ✅ Usamos `product.id` para asegurar comparaciones correctas
  const handleSelection = (product) => {
    if (selectedProducts.some((p) => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  // ✅ Verificar que `products` es un array antes de usar `.map()`
  if (!Array.isArray(products)) {
    return <p>Error: los productos no están disponibles.</p>;
  }

  return (
    <div className="comparison-container">
      <h2>Comparador de Vehículos</h2>

      {/* ✅ Opciones para seleccionar los vehículos */}
      <div className="product-selection">
        {products.map((product) => (
          <label key={product.id} className="product-option">
            <input
              type="checkbox"
              onChange={() => handleSelection(product)}
              checked={selectedProducts.some((p) => p.id === product.id)}
            />
            {product.name}
          </label>
        ))}
      </div>

      {/* ✅ Tabla de comparación */}
      {selectedProducts.length > 1 && (
        <div className="comparison-table-container">
          <h3>Comparación de Vehículos</h3>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Característica</th>
                {selectedProducts.map((product) => (
                  <th key={product.id}>{product.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Imagen</td>
                {selectedProducts.map((product) => (
                  <td key={product.id}>
                    <img src={product.image} alt={product.name} className="comparison-image" />
                  </td>
                ))}
              </tr>
              <tr>
                <td>Precio</td>
                {selectedProducts.map((product) => (
                  <td key={product.id}>{product.price} €</td>
                ))}
              </tr>
              <tr>
                <td>Valoración</td>
                {selectedProducts.map((product) => (
                  <td key={product.id}>{product.rating} ★</td>
                ))}
              </tr>
              <tr>
                <td>Color</td>
                {selectedProducts.map((product) => (
                  <td key={product.id} style={{ backgroundColor: product.color, color: "white" }}>
                    {product.color}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Característica</td>
                {selectedProducts.map((product) => (
                  <td key={product.id}>{product.feature}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductComparison;