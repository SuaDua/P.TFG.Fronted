import React, { useState } from 'react';
import '../styles/chatcomponent.css';

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const sendMessage = () => {
        if (currentMessage.trim()) {
            setMessages([...messages, { text: currentMessage, sender: 'User' }]);
            setCurrentMessage('');
        }
    };

    return (
        <div className="chat-component">
            <h3>Chat de Venta</h3>
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`chat-message ${message.sender === 'User' ? 'user' : 'seller'}`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Escribe tu mensaje..."
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Enviar</button>
            </div>
        </div>
    );
};

export default ChatComponent;