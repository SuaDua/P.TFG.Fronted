import React, { useState } from 'react';
import '../styles/products.css';

const brands = ["Chevrolet", "Opel", "Ford", "BMW", "Audi", "Volkswagen", "Honda"];
const prices = [11000, 20000, 25000, 30000, 40000, 55000];
const kilometers = [10000, 25000, 50000, 75000, 100000];
const provinces = ["Sevilla", "Cádiz", "Huelva", "Córdoba", "Jaén", "Almería", "Granada"];
const years = [2021, 2022, 2023, 2024];

const ProductFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    brand: "",
    price: "",
    km: "",
    province: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleApply = (e) => {
    e.preventDefault();
    if (typeof onFilter === 'function') {
      onFilter(filters);
    } else {
      console.warn("❌ onFilter no es una función válida.");
    }
  };

  return (
    <div className="filter-container">
      <h2>Filtrar por:</h2>
      <form onSubmit={handleApply}>
        <label>Marca:</label>
        <select name="brand" value={filters.brand} onChange={handleChange}>
          <option value="">Cualquiera</option>
          {brands.map((brand, i) => (
            <option key={i} value={brand}>{brand}</option>
          ))}
        </select>

        <label>Precio (Máx.):</label>
        <select name="price" value={filters.price} onChange={handleChange}>
          <option value="">Cualquiera</option>
          {prices.map((p, i) => (
            <option key={i} value={p}>{p.toLocaleString()} €</option>
          ))}
        </select>

        <label>Kilometraje (Máx.):</label>
        <select name="km" value={filters.km} onChange={handleChange}>
          <option value="">Cualquiera</option>
          {kilometers.map((k, i) => (
            <option key={i} value={k}>{k.toLocaleString()} km</option>
          ))}
        </select>

        <label>Provincia:</label>
        <select name="province" value={filters.province} onChange={handleChange}>
          <option value="">Cualquiera</option>
          {provinces.map((p, i) => (
            <option key={i} value={p}>{p}</option>
          ))}
        </select>

        <label>Año (Desde):</label>
        <select name="year" value={filters.year} onChange={handleChange}>
          <option value="">Cualquiera</option>
          {years.map((y, i) => (
            <option key={i} value={y}>{y}</option>
          ))}
        </select>

        <button type="submit" className="filter-btn">Aplicar Filtros</button>
      </form>
    </div>
  );
};

export default ProductFilter;
