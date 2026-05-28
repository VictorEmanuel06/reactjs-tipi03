import React from 'react'

import Login from "./Login";
import Cadastrar from './Cadastrar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/cadastrar' element={<Cadastrar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;