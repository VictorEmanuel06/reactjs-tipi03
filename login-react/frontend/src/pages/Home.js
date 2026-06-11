import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 
const Home = () => {
 
    const [name, setName] = useState('');
    const navegacao = useNavigate();
 
    axios.defaults.withCredentials = true;
 
    useEffect(() => {
      axios.get('http://localhost:7006')
      .then( res => {
        if(res.data.valid){
          setName(res.data.name)
        } else {
          navegacao('/login')
        }
      })
      .catch(err => console.log(err))
    }, [navegacao])
 

    const handleLogout = () => {
      axios.get('http://localhost:7006/logout', {withCredentials : true})
      .then(res => {
        if(res.data.message){
          navegacao('/login') //ao destruir a sessão volta para login
        }
      })
      .catch(err => console.log(err));
    }

  return (
    <div>
      <h1>Boas vindas ao nosso site {name}</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  )
}

export default Home;