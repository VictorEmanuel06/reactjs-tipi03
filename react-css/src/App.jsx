import './App.css'

import MeuComponente from './componentes/MeuComponente';

// Importando CSS Modules
import Titulo from './componentes/Titulo';

function App() {

  const n = 15;
  const m = 35;

  //Classe dinâmica
  const brownTitulo = true;

  return (
    <div className='App'>
      {/* 1 - css global */}
      <h1>CSS no React</h1>

      {/* 2 - css do MeuComponente */}
      <MeuComponente />
      <p>Pegou o CSS do Componente</p>

      {/* 3 - inline styles */}
      <p style={{color: "green", padding: "25px", borderLeft: "2px solid red"}}>Elemento com estilo inline</p>

      {/* 4 - inline styles dinâmico */}
      <h2 style={n > 10 ? {color: "yellow"} : {color: "red"}}>inline styles dinâmico</h2>
      <h2 style={m > 45 ? {color: "yellow"} : {color: "red"}}>inline styles dinâmico novamente</h2>

      {/* 5 - classe dinâmica */}
      <h1 className={brownTitulo ? "brown-titulo" : "titulo"}>Título com Classe dinâmica</h1>

      {/* 6 - CSS Modules */}
      <Titulo />
      
    </div>
  )
}

export default App;
