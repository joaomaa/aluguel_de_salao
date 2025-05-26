import React from 'react';
import { Link } from 'react-router-dom';

export default function HallCard({ id, name, image, local, priceday }) {
  return (
    <Link to={`/aluguel_de_salao/${id}`} className="block w-64 border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{local}</p>
        <p className="mt-2 font-bold">R$ {priceday} / dia</p>
    </div>
      </Link>
  )
}