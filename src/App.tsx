import React from 'react';
import logo from './logo.svg';
import './App.css';
import Numero from './components/Numero';
import Botao from './components/Botao';

function App() {
  return (
    <div className="App">
        <h1>App Contador</h1>
        <Numero />
        <Botao />
        <p>versão 0.1.0</p>
    </div>
  );
}

export default App;
