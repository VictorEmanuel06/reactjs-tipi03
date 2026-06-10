import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


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

  return (
    <div>
      <h1>Boas vindas ao nosso site {name}</h1>
    </div>
  )
}

export default Home;