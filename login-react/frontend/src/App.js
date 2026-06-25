import React, {useEffect, useState} from 'react';
 
import Login from "./pages/Login";
import Cadastrar from './pages/Cadastrar';
import Home from './pages/Home';
import Cadastrados from './pages/Cadastrados';
import Editar from './pages/Editar';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProtecdRoute from './services/ProtecdRoute';
import axios from "axios";
 
const App = () => {

  const [auth, seAuth] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:7006", { withCredentials: true })
      .then(res => {
        seAuth(res.data.valid);
      })
      .catch(() => seAuth(false));
  }, []);

  if (auth === null) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/cadastrar' element={<Cadastrar />}></Route>

            <Route path='/' element={
              <ProtecdRoute auth={auth}>
                <Home />
              </ProtecdRoute>
              }></Route>

            <Route path='/cadastrados' element={
              <ProtecdRoute auth={auth}>
                <Cadastrados />
              </ProtecdRoute>
              }></Route>

            <Route path='/editar/:id' element={
              <ProtecdRoute auth={auth}>
                <Editar />
              </ProtecdRoute>
              }></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
 
export default App;