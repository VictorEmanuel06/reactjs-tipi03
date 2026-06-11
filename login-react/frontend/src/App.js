import React from 'react'
 
import Login from "./pages/Login";
import Cadastrar from './pages/Cadastrar';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
 
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/cadastrar' element={<Cadastrar />}></Route>
            <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
 
export default App;