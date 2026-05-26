
import { useState } from 'react';

const ListaRenderizacao = () => {

    // Lista de Renderização
    const [lista] = useState(["Matheus", "Pedro", "Josias"]);

    // Propriedade Key
    const [usuarios, setUsuarios] = useState([
        { id: 1, name: "Matheus", age: 31 },
        { id: 2, name: "Pedro", age: 20 },
        { id: 3, name: "Josias", age: 19 },
    ]);

    const deletandoaleatoriamente = () => {
        const numeroAleatorio = Math.floor(Math.random() * 4); // Gera um número aleatório entre 0 e 3

        //Atualização de estado - set
        setUsuarios((prevUsuarios) =>
            prevUsuarios.filter((usuarios) => numeroAleatorio !== usuarios.id)
        );
    };

  return (
    <div>
        <ul>
            {lista.map((nome, index) => (
                <li key={index}> {nome} </li>
            ))}
        </ul>

        {/* render COM key */}
        <ul>
            {usuarios.map((usuarios) => (
                <li>{usuarios.name} - {usuarios.age}</li>
            ))}
        </ul>

        {/* Previous State */}
        <button onClick={deletandoaleatoriamente}>Deletando Usuário Aleatoriamente</button>
    </div>
  )
}

export default ListaRenderizacao;