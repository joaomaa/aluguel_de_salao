import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const PainelLocatario = () => {
  const { token, logout } = useContext(AuthContext);
  const [halls, setHalls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    const storedHalls = JSON.parse(localStorage.getItem('halls') || '[]');
    setHalls(storedHalls);
  }, [token, navigate]);

  const handleCreate = () => navigate('/painel_locatario/criar');
  const handleEdit = (id) => navigate(`/painel_locatario/editar/${id}`);
  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este salão?')) {
      const storedHalls = JSON.parse(localStorage.getItem('halls') || '[]');
      const updatedHalls = storedHalls.filter((hall) => hall._id !== id);
      localStorage.setItem('halls', JSON.stringify(updatedHalls));
      setHalls(updatedHalls);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Painel do Locatário</h1>
      <div className="flex gap-4 mb-6">
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Criar Novo Salão
        </button>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Sair
        </button>
      </div>
      <div className="space-y-4">
        {halls.length === 0 ? (
          <p className="text-gray-600">Nenhum salão cadastrado ainda.</p>
        ) : (
          halls.map((hall) => (
            <div key={hall._id} className="border p-4 rounded-lg shadow-sm bg-white">
              <h2 className="text-xl font-semibold">{hall.name}</h2>
              <p className="text-gray-600">{hall.description}</p>
              <p className="text-sm text-gray-500">
                📍 {hall.local} | R$ {hall.priceday} / dia | {hall.tamanho} m²
              </p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => handleEdit(hall._id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(hall._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PainelLocatario;