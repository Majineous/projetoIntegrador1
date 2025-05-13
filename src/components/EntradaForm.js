import React, { useState } from 'react';
import './EntradaForm.css';

const EntradaForm = () => {
  const [entradas, setEntradas] = useState([]);
  const [form, setForm] = useState({
    lote: '',
    data: '',
    placa: '',
    motorista: '',
    ticket: '',
    pedido: '',
    fornecedor: '',
    tambores: '',
    peso: '',
    tipo: '',
    categoria: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const media = parseFloat(form.peso) / parseInt(form.tambores);
    setEntradas([...entradas, { ...form, media: isNaN(media) ? 0 : media.toFixed(2) }]);
    setForm({
      lote: '',
      data: '',
      placa: '',
      motorista: '',
      ticket: '',
      pedido: '',
      fornecedor: '',
      tambores: '',
      peso: '',
      tipo: '',
      categoria: ''
    });
  };

  return (
    <div>
      <h2>Controle de Entrada</h2>
      <form onSubmit={handleSubmit}>
        <input name="lote" placeholder="Lote" value={form.lote} onChange={handleChange} />
        <input name="data" type="date" value={form.data} onChange={handleChange} />
        <input name="placa" placeholder="Placa" value={form.placa} onChange={handleChange} />
        <input name="motorista" placeholder="Motorista" value={form.motorista} onChange={handleChange} />
        <input name="ticket" placeholder="Ticket" value={form.ticket} onChange={handleChange} />
        <input name="pedido" placeholder="Pedido de compra" value={form.pedido} onChange={handleChange} />
        <input name="fornecedor" placeholder="Fornecedor" value={form.fornecedor} onChange={handleChange} />
        <input name="tambores" type="number" placeholder="Tambores" value={form.tambores} onChange={handleChange} />
        <input name="peso" type="number" placeholder="Peso bruto" value={form.peso} onChange={handleChange} />
        <select name="tipo" value={form.tipo} onChange={handleChange}>
          <option value="">--Tipo--</option>
          <option value="E">E</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <select name="categoria" label="categoria" value={form.categoria} onChange={handleChange}>
          <option value="">--Categoria--</option>
          <option value="Compras Diretas">Compras Diretas</option>
          <option value="Fazenda">Fazenda</option>
        </select>
        <button type="submit">Adicionar</button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>Lote</th><th>Data</th><th>Placa</th><th>Motorista</th><th>Ticket</th>
            <th>Pedido</th><th>Fornecedor</th><th>Tambores</th><th>Peso</th><th>Média</th>
            <th>Tipo</th><th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {entradas.map((e, i) => (
            <tr key={i}>
              <td>{e.lote}</td><td>{e.data}</td><td>{e.placa}</td><td>{e.motorista}</td><td>{e.ticket}</td>
              <td>{e.pedido}</td><td>{e.fornecedor}</td><td>{e.tambores}</td><td>{e.peso}</td><td>{e.media}</td>
              <td>{e.tipo}</td><td>{e.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default EntradaForm;
