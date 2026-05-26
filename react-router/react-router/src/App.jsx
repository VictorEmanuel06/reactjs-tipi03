import './App.css';

import { Outlet } from 'react-router-dom';

//Link de navegação entre páginas
import Navbar from './components/Navbar';

//Search Form
import SearchParams from './components/SearchParams';

function App() {
  
  return (
    <>
      <div className='App'>
          <Navbar />
          <SearchParams />
          <Outlet />
        <p>Footer</p>
      </div>
    </>
  )
}

export default App;
