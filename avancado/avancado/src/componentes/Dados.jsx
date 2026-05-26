import { useState } from 'react';


const Dados = () => {

    let mostreDados = 10;

    const [novoNumero, setNovoNumero] = useState(15);

  return (
    <div>
        <p>Valor: {mostreDados}</p>

         {/* exibindo o novo valor atribuído - get */}
        <p>Novo valor: {novoNumero}</p>

        {/* exibindo o novo valor através de um evento de click - set */}
        <button onClick={() => setNovoNumero(20)}>Mudando o valor após click</button>
    </div>
  )
}

export default Dados;