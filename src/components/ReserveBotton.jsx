import React from 'react';

export default function ReserveBotton({ priceday }) {
  return (
    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition">
      Reservar — R$ {priceday} / dia
    </button>
  );
}