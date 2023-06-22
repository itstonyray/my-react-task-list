import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav>
        <div>
            <button> <Link to="/">Home</Link></button>
            <button><Link to="/tareas">Tareas</Link></button>
            <button><Link to="/sobre-nosotros">Sobre Nosotros</Link></button>      
        </div>
    </nav>    
  );
};


