import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Editar = () => {
  const { id } = useParams();
  const navegacao = useNavigate();

  const [dados, setDados] =  useState ({
    name: '',
    email: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:7006/cadastrados/${id}`)
    .then(res => {
      setDados({
        name: res.data.name,
        email: res.data.email
      });
    })
    .catch(err => console.log(err));
  }, [id]);

  const handleChange = () => {

  }

  const handleSubmit = () => {

  }

  //Função cancelar
  const handleCancelar = () => {
    navegacao("/cadastrados");
  }

  return (
    <div>
      <h2>Editar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input 
            type="text"
            name="name"
            value={dados.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={dados.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Atualizar</button>

        <button
          type="button"
          onClick={handleCancelar}
          style={{ marginLeft: '10px' }}
        >
          Cancelar
        </button>
      </form>

    </div>
  )
}

export default Editar;