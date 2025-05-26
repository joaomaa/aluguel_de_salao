import React, { useState, useEffect } from 'react';

export default function AdminHalls() {
  const [halls, setHalls] = useState([]);
  const [form, setForm] = useState({
    name: '',
    local: '',
    image: '',
    priceday: 0,
    tamanho: 0,
    description: '',
  });

  useEffect(() => {
    const storedHalls = JSON.parse(localStorage.getItem('halls') || '[]');
    setHalls(storedHalls);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCreate = () => {
    const newHall = { ...form, _id: Date.now().toString() };
    const updatedHalls = [...halls, newHall];
    localStorage.setItem('halls', JSON.stringify(updatedHalls));
    setHalls(updatedHalls);
    setForm({ name: '', local: '', image: '', priceday: 0, tamanho: 0, description: '' });
  };

  const handleDelete = (id) => {
    const updatedHalls = halls.filter((h) => h._id !== id);
    localStorage.setItem('halls', JSON.stringify(updatedHalls));
    setHalls(updatedHalls);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Meus Salões</h2>
      <div className="space-y-2 mb-6">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            value={form[key]}
            onChange={handleChange}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            className="block w-full border p-2 rounded shadow-sm"
          />
        ))}
        <button onClick={handleCreate} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          Adicionar Salão
        </button>
      </div>
      {halls.length === 0 ? (
        <p className="text-gray-600">Nenhum salão cadastrado ainda.</p>
      ) : (
        halls.map((h) => (
          <div key={h._id} className="flex justify-between items-center border-b py-2">
            <span>{h.name}</span>
            <button onClick={() => handleDelete(h._id)} className="text-red-600 hover:text-red-800">
              Excluir
            </button>
          </div>
        ))
      )}
    </div>
  );
}