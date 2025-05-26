import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const CriarSalao = () => {
  const { token } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: '',
    local: '',
    image: '',
    priceday: 0,
    tamanho: 0,
    description: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!token) {
      navigate('/login');
      return;
    }
    const newHall = { ...form, _id: Date.now().toString() }; // ID único baseado em timestamp
    const storedHalls = JSON.parse(localStorage.getItem('halls') || '[]');
    storedHalls.push(newHall);
    localStorage.setItem('halls', JSON.stringify(storedHalls));
    alert('Salão criado com sucesso!');
    navigate('/painel_locatario');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Criar Novo Salão</h1>
      <div className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nome"
          className="block w-full border p-2 rounded shadow-sm"
        />
        <input
          name="local"
          value={form.local}
          onChange={handleChange}
          placeholder="Local"
          className="block w-full border p-2 rounded shadow-sm"
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Imagem (URL)"
          className="block w-full border p-2 rounded shadow-sm"
        />
        <input
          name="priceday"
          type="number"
          value={form.priceday}
          onChange={handleChange}
          placeholder="Preço por Dia"
          className="block w-full border p-2 rounded shadow-sm"
        />
        <input
          name="tamanho"
          type="number"
          value={form.tamanho}
          onChange={handleChange}
          placeholder="Tamanho (m²)"
          className="block w-full border p-2 rounded shadow-sm"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Descrição"
          className="block w-full border p-2 rounded shadow-sm"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Criar Salão
        </button>
      </div>
    </div>
  );
};

export default CriarSalao;