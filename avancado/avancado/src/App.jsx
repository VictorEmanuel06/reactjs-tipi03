import './App.css';

//9 - Importando imagem do Assets
import ibirapuera from './assets/Ibirapuera.jpg';

//10 - Importando Hooks - useState
import Dados from './componentes/Dados';

//11 - Importando Lista Renderizada
import ListaRenderizacao from './componentes/ListaRenderizacao';

//12 - Importando Renderização Condicional
import RenderizacaoCondicional from './componentes/RenderizacaoCondicional';

//13 - Props
import MostrarNomedoUsuario from './componentes/MostrarNomedoUsuario';

//14 - Desestruturando Props
import DetalherdoCarro from './componentes/DetalherdoCarro';

//15 - Renderização com loop - da lista de componentes
const carros = [
  {id: 1, marca: "Fiat", cor: "verde", km: 0},
  {id: 1, marca: "Ford", cor: "preto", km: 12000},
  {id: 1, marca: "Citroen", cor: "vermelho", km: 100000},
];


function App() {

  return (
   <div className="AppAvancado">
    {/* 8 - Inserindo imagem do public */}
    <img src="/SP.jpg" alt="Imagem de Cima, São Paulo" />

    {/* 9 - Importando imagem do Assets */}
    <img src={ibirapuera} alt="Foto do Parque Ibirapuera, vista de cima" />

    {/* 10 - Importando Dados */}
    <Dados />

    {/* 11 - Importando Lista Renderizada */}
    <ListaRenderizacao />

    {/* 12 - Importando Renderização Condicional */}
    <RenderizacaoCondicional />

    {/* 13 - Props */}
    <MostrarNomedoUsuario name = "Ana" />

    {/* 14 - Desestruturando Props */}
    <DetalherdoCarro marca = "BWM" km={200} cor = "azul" />

    {/* Reaproveitando Props */}
    <DetalherdoCarro marca = "HRV" km = {500} cor = "prata" />
    <DetalherdoCarro marca = "Onix" km = {1500} cor = "branco" />

    {/* Renderização com loop - da lista de componentes */}
    {carros.map((carros) => (
      <DetalherdoCarro key={carros.id} marca={carros.marca} cor={carros.cor} km={carros.km} />
    ))}


   </div>
  )
}

export default App;
