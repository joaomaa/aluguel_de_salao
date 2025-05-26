import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!email || !password) {
      alert('Preencha todos os campos!');
      return;
    }
    try {
      await register(email, password);
      alert('Cadastrado com sucesso! Faça login para continuar.');
      navigate('/login');
    } catch (error) {
      alert(error.message || 'Erro ao cadastrar!');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Locatário</h1>
      <input
        className="block mb-2 border p-2 w-full rounded shadow-sm"
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="block mb-2 border p-2 w-full rounded shadow-sm"
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleRegister}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Cadastrar
      </button>
      <p className="mt-4 text-center">
        Já tem uma conta?{' '}
        <Link to="/login" className="text-blue-600 hover:underline">
          Faça login
        </Link>
      </p>
    </div>
  );
}