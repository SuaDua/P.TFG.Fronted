import React, { useState, useEffect } from "react";
import products from "../services/Content_API";
import "../styles/survey.css";

const Survey = () => {
  const [votes, setVotes] = useState({});
  const [ratings, setRatings] = useState({});
  const [feedback, setFeedback] = useState({});

  // Cargar datos desde localStorage al inicio
  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("votes")) || {};
    const savedRatings = JSON.parse(localStorage.getItem("ratings")) || {};
    const savedFeedback = JSON.parse(localStorage.getItem("feedback")) || {};
    setVotes(savedVotes);
    setRatings(savedRatings);
    setFeedback(savedFeedback);
  }, []);

  // Guardar en localStorage cuando cambian los datos
  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
    localStorage.setItem("ratings", JSON.stringify(ratings));
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [votes, ratings, feedback]);

  // Manejar votos ("Me gusta")
  const handleVote = (id) => {
    setVotes((prevVotes) => {
      const updatedVotes = { ...prevVotes, [id]: (prevVotes[id] || 0) + 1 };
      return updatedVotes;
    });
  };

  // Manejar calificaciones (1-5 estrellas)
  const handleRating = (id, rating) => {
    setRatings((prevRatings) => ({ ...prevRatings, [id]: rating }));
  };

  // Manejar comentarios de usuario
  const handleFeedback = (id, comment) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [id]: comment }));
  };

  // Ordenar productos por votos en tiempo real
  const sortedProducts = [...products].sort((a, b) => (votes[b.id] || 0) - (votes[a.id] || 0));

  return (
    <div className="survey-container">
      <h2>Encuesta de Satisfacción y Votación</h2>

      <div className="survey-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="survey-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
           

            {/* Votar ("Me gusta") */}
            <button className="vote-button" onClick={() => handleVote(product.id)}>
              👍 Me gusta ({votes[product.id] || 0})
            </button>

            {/* Calificación con estrellas */}
            <div className="rating">
              <label>Calificación:</label>
              <select value={ratings[product.id] || ""} onChange={(e) => handleRating(product.id, e.target.value)}>
                <option value="">Seleccionar</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select>
              {ratings[product.id] && <p>Calificación actual: {"⭐".repeat(ratings[product.id])}</p>}
            </div>

            {/* Comentarios */}
            <textarea
              placeholder="Escribe un comentario..."
              value={feedback[product.id] || ""}
              onChange={(e) => handleFeedback(product.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Survey;