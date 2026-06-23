import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cadastrados = () => {
  const [lista, setlista] = useState([]);
  const navegacao = useNavigate();

  useEffect(() => {
    carregarUsuarios();
  }, []);

  // Carregar usuários
  const carregarUsuarios = () => {
    axios.get('http://localhost:7006/cadastrados', {withCredentials: true})
      .then(res => {
        setlista(res.data);
      })
      .catch(err => console.log(err));
  }

  // Voltar para home
  const handleHome = () => {
    navegacao('/');
  }

  // Navegar para edição
  const handleEditar = (id) => {
    navegacao(`/editar/${id}`);
  }

  return (
    <div>
      <button onClick={handleHome} style={{ marginBottom: '15px' }}>
        Voltar para home
      </button>

        <h2>Lista de Cadastrados</h2>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {lista.length > 0 ? (
              lista.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.name}</td>
                  <td>{usuario.email}</td>
                  <button onClick={() => handleEditar(usuario.id)}>
                    Editar
                  </button>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Nenhum usuário encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  )
}

export default Cadastrados;