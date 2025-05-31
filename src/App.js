import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Hero from './components/home/herosection';
import ContentList from './components/home/contentList';
import Footer from './components/layout/footer';
import ChatComponent from './components/home/chatcomponent';
import ProductCard from './components/home/productcard';
import ProductFilter from './components/home/productfilter';
import Login from './components/auth/login';
import Register from './components/auth/register';
import ForgotPassword from './components/auth/forgotpassword';
import CarDetails from './components/cars/cardetails';
import BuyCar from './components/cars/bussycar';
import ProductComparison from './components/sales/productcomparison';
import Survey from './components/sales/survey';
import ProductConfigurator from './components/sales/productconfigurator';
import products from './components/services/Content_API';

const App = () => {
  const [filteredCars, setFilteredCars] = useState(products);

  useEffect(() => {
    fetch("http://localhost:5000/api/cars")
      .then(res => res.json())
      .then(data => setFilteredCars(data))
      .catch(err => console.error(err));
  }, []);

  const handleFilter = (filters) => {
    const filtered = products.filter((product) => {
      const matchesBrand = !filters.brand || product.name.toLowerCase().includes(filters.brand.toLowerCase());
      const matchesPrice = !filters.price || product.price <= parseInt(filters.price);
      const matchesYear = !filters.year || product.year === parseInt(filters.year);
      const matchesProvince = !filters.province || product.province === filters.province;
      const matchesKm = !filters.km || !product.km || product.km <= parseInt(filters.km);

      return matchesBrand && matchesPrice && matchesYear && matchesProvince && matchesKm;
    });

    setFilteredCars(filtered);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ContentList />
              <ProductFilter onFilter={handleFilter} />
              <div className="product-list">
                {filteredCars.map((car, index) => (
                  <ProductCard key={index} car={car} />
                ))}
              </div>
              <ChatComponent />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/comparador" element={<ProductComparison products={products} details={filteredCars} />} />
        <Route path="/encuesta" element={<Survey products={products} details={filteredCars} />} />
        <Route path="/configurador" element={<ProductConfigurator products={products} details={filteredCars} />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/comprar/:id" element={<BuyCar />} />
      </Routes>
    </div>
  );
};

export default App;
