
import React, { useState } from 'react';
import SearchBar from "../cars/searchbar";

import '../styles/home.css';
import "../styles/productcomparison.css";

const cars = [
    { id: 1, name: 'Chevrolet Camaro', price: '43,800€',  image: '/assets/products/ChevroletCamaro.jpg' },
    { id: 2, name: 'Opel Insignia', price: '11,900€', image: '/assets/products/OpelInsignia.jpg' },
    { id: 3, name: 'Ford Mustang', price: '55,000€', image: '/assets/products/FordMustang.jpg' },
    { id: 4, name: 'BMW Serie 3', price: '25,400€', image: '/assets/products/BMW-Serie-3.png' },
    { id: 5, name: 'Audi A4', price: '29,800€', image: '/assets/products/Audi-A4.jpg' },
    { id: 7, name: 'Volkswagen Golf', price: '19,700€', image: '/assets/products/Volkswagen-Wolf.jpg' },
    { id: 9, name: 'Honda Civic', price: '20,300€', image: '/assets/products/Honda-Civic.jpg' },
 
];


const ContentList = () => {
    const [filteredCars, setFilteredCars] = useState(cars);
    const [isSearching, setIsSearching] = useState(false);

    // 🔍 Filtrar la lista en tiempo real
    const handleSearch = (searchTerm) => {
        if (searchTerm.trim() === "") {
            setFilteredCars(cars);
            setIsSearching(false);
        } else {
            const filtered = cars.filter((car) =>
                car.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredCars(filtered);
            setIsSearching(true);
        }
    };

    return (
        <section className="content-list">
            <h2>🚗 Listado de Coches</h2>
            <SearchBar onSearch={handleSearch} /> {/* ✅ Agregamos la barra de búsqueda */}

            <div className="content-grid">
                {filteredCars.map((car) => {
                    const numericPrice = parseInt(car.price.replace(/[^0-9]/g, ""), 10);
                    return (
                        <div key={car.id} className="car-card">
                            {/* ✅ Reducimos la imagen SOLO si hay búsqueda */}
                            <img src={car.image} alt={car.name} className={isSearching ? "search-result-image" : "default-image"} />
                            <h3>{car.name}</h3>
                            <p className="car-price">Precio: {car.price}</p>

                            {/* 🔥 Mostrar la oferta solo si el precio es menor a 20,000€ */}
                            {numericPrice < 20000 && <span className="tag-offer">🔥 Oferta</span>}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ContentList;