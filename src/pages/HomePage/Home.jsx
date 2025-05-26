import React from 'react';
import HallsContainer from './HallsContainer/HallsContainer';

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Escolha o seu Salão
        </h2>
        <HallsContainer />
      </section>
    </main>
  );
}