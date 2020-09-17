import React from 'react';
import FormSearche from './AppSearche.js';

export default function AppHeader() {
    return (
            <header className="App-header">
                <img className="App-logo" alt="logo" />
                <div className="searche-box">
                    <FormSearche />
                </div>
            </header>
    );
}

