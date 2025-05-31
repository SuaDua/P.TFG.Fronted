import React, { useState } from 'react';
import { recoverPassword } from '../services/auth_API';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleRecovery = async (e) => {
        e.preventDefault();
        try {
            const response = await recoverPassword(email);
            setMessage(response.message);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Recuperar Contraseña</h2>
            <form onSubmit={handleRecovery}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                {message && <p style={{ color: 'green' }}>{message}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Enviar Enlace</button>
            </form>
        </div>
    );
};

export default ForgotPassword;