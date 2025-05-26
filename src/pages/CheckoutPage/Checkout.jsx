import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { salon, selectedDate } = location.state || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cartao");

  if (!salon || !selectedDate) {
    return (
      <div className="p-8 text-center text-red-600 text-xl">
        Dados da reserva não encontrados.
      </div>
    );
  }

  const handleConfirm = () => {
    if (!name || !email) {
      alert("Por favor, preencha todos os dados.");
      return;
    }

    alert(`✅ Reserva confirmada para ${name} em ${selectedDate}.\nPagamento via ${paymentMethod}.`);
    navigate("/"); // Volta para a Home (ou outra página, se preferir)
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">🧾 Checkout da Reserva</h1>

      <div className="mb-4">
        <p><strong>🏢 Salão:</strong> {salon.name}</p>
        <p><strong>📅 Data:</strong> {selectedDate}</p>
        <p><strong>💰 Valor:</strong> R$ {salon.priceday}</p>
      </div>

      <hr className="my-6" />

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">👤 Nome completo:</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full border px-3 py-2 rounded shadow-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">📧 E-mail:</label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="w-full border px-3 py-2 rounded shadow-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">💳 Forma de pagamento:</label>
          <select
            className="w-full border px-3 py-2 rounded shadow-sm"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="cartao">Cartão de Crédito</option>
            <option value="pix">PIX</option>
            <option value="boleto">Boleto</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleConfirm}
        className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
      >
        ✅ Confirmar Reserva
      </button>
    </div>
  );
}
