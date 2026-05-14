const EventoClick = () => {
    
        // 5 - Função no evento
        const handleClick = () => {
            console.log("handeClick executou!");
        };

        // 6 - Função de renderização
        const renderizacao = (x) => {
            if(x) {
                return <h1>Renderizando o X</h1>
            }
            else{
                return <h1>Renderizando o Y</h1>
            }
        };

    return (
<div>
    <div>
        <button onClick = {() => console.log("Teste click")}>CLIQUE AQUI</button>
    </div>

    {/* 5 - Função no evento */}
    <div>
        <button onClick = {handleClick}>Botão com funçao</button>
    </div>

    {/* Retornando a função com renderização */}
    {renderizacao(true)}
    {renderizacao(false)}

</div>
  )
}

export default EventoClick;