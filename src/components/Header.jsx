import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Reserva Salões</h1>
      <nav>
        <Link to="/" className="mr-4 hover:underline">Home</Link>
        <Link to="/cadastro" className="mr-4 hover:underline">Cadastro</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </nav>
    </header>
  )
}