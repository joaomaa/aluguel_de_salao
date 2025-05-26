import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function HallVisu() {
  const { salonId } = useParams();
  const navigate = useNavigate();
  const [salon, setSalon] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const storedHalls = JSON.parse(localStorage.getItem('halls') || '[]');
    const foundSalon = storedHalls.find((item) => item._id === salonId);
    setSalon(foundSalon);
  }, [salonId]);

  if (!salon) {
    return (
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-red-600">Salão não encontrado.</h1>
      </div>
    );
  }

  const handleReservation = () => {
    if (!selectedDate) {
      alert('Escolha uma data antes de continuar.');
      return;
    }
    navigate('/checkout', {
      state: {
        salon,
        selectedDate,
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <img
        src={salon.image}
        alt={salon.name}
        className="w-full h-72 object-cover rounded mb-6"
      />
      <div>
        <h1 className="text-3xl font-bold mb-2">🏢 {salon.name}</h1>
        <p className="text-gray-600 text-lg">📍 {salon.local}</p>
        <p className="text-gray-700 mt-4">{salon.description}</p>
        <p className="text-xl font-semibold mt-4">💰 R$ {salon.priceday} / dia</p>
        <p className="text-sm mt-1 text-gray-400">🧱 Tamanho: {salon.tamanho} m²</p>
      </div>
      <div className="mt-8">
        <label htmlFor="reservationDate" className="block mb-2 font-medium">
          📅 Selecione uma data para reservar:
        </label>
        <input
          type="date"
          id="reservationDate"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full border px-3 py-2 rounded shadow-sm focus:ring focus:ring-blue-300"
        />
      </div>
      <button
        onClick={handleReservation}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
      >
        Reservar — R$ {salon.priceday} / dia
      </button>
    </div>
  );
}