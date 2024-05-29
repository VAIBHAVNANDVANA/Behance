// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Behance Clone</div>
            <div className="auth-buttons">
                <button className="login-button">Login</button>
                <button className="signup-button">Sign Up</button>
            </div>
        </header>
    );
};

export default Header;

