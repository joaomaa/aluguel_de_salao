import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Header from './components/Header';
import Home from './pages/HomePage/home';
import Register from './pages/SingPage/Register';
import Login from './pages/SingPage/Login';
import AdminHalls from './pages/CrudPage/AdminHalls';
import HallVisu from './pages/HallPage/HallVisu';
import Checkout from './pages/CheckoutPage/Checkout';
import PainelLocatario from './pages/SingPage/PainelLocatario';
import CriarSalao from './pages/SingPage/CriarSalao';
import EditarSalao from './pages/SingPage/EditarSalao';

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/halls" element={<AdminHalls />} />
          <Route path="/aluguel_de_salao/:salonId" element={<HallVisu />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/painel_locatario" element={<PainelLocatario />} />
          <Route path="/painel_locatario/criar" element={<CriarSalao />} />
          <Route path="/painel_locatario/editar/:id" element={<EditarSalao />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}