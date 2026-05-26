import React from 'react'

const EventoClick = () => {

    // 5 - Função no evento
    const handleClick = () => {
        console.log("handleClick executou!");
    }

    // 6 - Função de renderização
    const renderizacao = (x) => {
        if(x) {
            return <h1>Renderizando o X</h1>
        }
        else{
            return <h1>Renderizando o Y</h1>
        }
    }

  return (
<div>
    <div>
        <button onClick = {() => console.log("Teste click")}>CLIQUE AQUI</button>
    </div>

    {/* 5 - Função no evento */}
    <div>
        <button onClick={handleClick}>Botão com função</button>
    </div>

    {/* Retornando a função com renderização */}
    {renderizacao(true)}
    {renderizacao(false)}
    
</div>
  )
}

export default EventoClick;