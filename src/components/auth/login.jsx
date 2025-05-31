import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/auth_API';
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);

      // ✅ Guarda token e ID del usuario en localStorage
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.id);

      alert("Inicio de sesión exitoso");
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Inicio de sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label>Contraseña *</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Iniciar sesión</button>
        <Link to="/forgot-password">¿Has olvidado tu contraseña?</Link>
        <Link to="/register">¿Aún no tienes cuenta?</Link>
      </form>
    </div>
  );
};

export default Login;