import React, { useState, useEffect } from 'react';
import HallCard from './HallCard';

export default function HallsContainer() {
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    const storedHalls = JSON.parse(localStorage.getItem('halls') || '[]');
    setHalls(storedHalls);
  }, []);

  return (
    <section className="container flex flex-wrap mx-auto p-10 justify-center gap-10">
      {halls.length === 0 ? (
        <p className="text-gray-600">Nenhum salão disponível.</p>
      ) : (
        halls.map((product) => (
          <HallCard key={product._id} id={product._id} {...product} />
        ))
      )}
    </section>
  );
}