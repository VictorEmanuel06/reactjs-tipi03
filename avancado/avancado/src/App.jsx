import './App.css';
import { useState } from 'react';

//9 -  Importando imagem do Assets
import ibirapuera from './assets/Ibirapuera.jpg';

//10 - Importando Hooks - useState
import Dados from './componentes/Dados';

//11 - Importando Lista Renderizada
import ListaRenderizacao from './componentes/ListaRenderizacao';

//12 - Importando Renderização Condicional
import RenderizacaoCondicional from './componentes/RenderizacaoCondicional';

// 13 - Props
import MostrarNomedoUsuario from './componentes/MostrarNomedoUsuario';

//14 - Desestruturando Props
import DetalhesdoCarro from './componentes/DetalhesdoCarro';

// 15 - Renderização com loop - da lista de componentes
const carros = [
  {id: 1, marca: "Fiat", cor: "verde", km: 0},
  {id: 2, marca: "Ford", cor: "preto", km: 12000},
  {id: 3, marca: "Citroen", cor: "vermelho", km: 100000},
];

//16 - Importando Fragmento
import Fragmento from './componentes/Fragmento';

//17 - Importando Children Prop
import Container from './componentes/Container';

//18 - Importando Função em Prop
import FuncaoProp from './componentes/FuncaoProp';

//19 - State Lift
import Mensagem from './componentes/Mensagem';
import MudarMensagem from './componentes/MudarMensagem';

function App() {

  function showMessage(){
    console.log("Evento do componente principal");
  }

  //19 - State Lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };


  return (
  <div className="AppAvancado">
    
    {/* 8 - Inserindo imagem do public */}
    <img src="/SP.jpg" alt="Imagem de Cima, São Paulo" />

    {/* 9 - Importando imagem do Assets */}
    <img src={ibirapuera} alt="Foto do Parque Ibirapuera, vista de cima" />

    {/* 10 - Importando Hooks */}
    <Dados />
    
    {/* 11- Importando Lista Renderizada */}
    <ListaRenderizacao />

    {/* 12 - Importando Renderização Condicional */}
    <RenderizacaoCondicional />

    {/* 13 - Props */}
    <MostrarNomedoUsuario name = "Ana" />

    {/* 14 - Desestruturando Props */}
    <DetalhesdoCarro marca = "BMW" km = {200} cor = "azul" />

    {/* Reaproveitando Props */}
    <DetalhesdoCarro marca = "HRV" km = {500} cor = "prata" />
    <DetalhesdoCarro marca = "Onix" km = {1500} cor = "branco" />

    {/*  Renderização com loop - da lista de componentes */}
    {carros.map((carros) => (
       <DetalhesdoCarro key={carros.id} marca={carros.marca} cor={carros.cor} km={carros.km} />
    ))}

    {/* 16 - Importando Fragmento */}
    <Fragmento />

    {/* 17 - Importando Children Prop */}
    <Container>
        <p>Exibindo Children</p>
    </Container>

    {/* 18 - Importando Função em Prop */}
    <FuncaoProp minhaFuncao={showMessage}/>

    {/* 19 - State Lift */}
    <Mensagem msg={message} />
    <MudarMensagem handleMessage={handleMessage} />

  </div>
  )
}

export default App;
