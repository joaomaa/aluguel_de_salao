import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const EditarSalao = () => {
  const { token } = useContext(AuthContext);
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    const storedHalls = JSON.parse(localStorage.getItem('halls') || '[]');
    const hall = storedHalls.find((h) => h._id === id);
    if (hall) {
      setForm(hall);
    } else {
      navigate('/painel_locatario');
    }
  }, [id, token, navigate]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const storedHalls = JSON.parse(localStorage.getItem('halls') || '[]');
    const updatedHalls = storedHalls.map((hall) =>
      hall._id === id ? { ...form, _id: id } : hall
    );
    localStorage.setItem('halls', JSON.stringify(updatedHalls));
    alert('Salão atualizado com sucesso!');
    navigate('/painel_locatario');
  };

  if (!form) return <div className="p-6">Carregando...</div>;

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Editar Salão</h1>
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
          Salvar Alterações
        </button>
      </div>
    </div>
  );
};

export default EditarSalao;