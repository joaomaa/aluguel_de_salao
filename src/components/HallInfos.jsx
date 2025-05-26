import React from 'react';
import ReserveBotton from './ReserveBotton';

export default function HallInfos({ id, name, image, description, priceday }) {
  return (
    <article className="p-4 border rounded-lg shadow-sm">
      <p>ID: {id}</p>
      <h1 className="text-xl font-bold">{name}</h1>
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md my-2" />
      <p className="text-gray-700">{description}</p>
      <ReserveBotton priceday={priceday} />
    </article>
  );
}