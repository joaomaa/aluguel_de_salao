import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('locatario')) || null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const register = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('locatario'));
    if (storedUser && storedUser.email === email) {
      throw new Error('Email já existe');
    }
    const newUser = { email, password };
    localStorage.setItem('locatario', JSON.stringify(newUser));
    localStorage.setItem('token', 'fake-token');
    setUser(newUser);
    setToken('fake-token');
  };

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('locatario'));
    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      throw new Error('Credenciais inválidas');
    }
    localStorage.setItem('token', 'fake-token');
    setUser({ email });
    setToken('fake-token');
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('locatario');
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}