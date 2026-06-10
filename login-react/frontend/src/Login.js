import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ValidacaoDeLogin from "./ValidacaoDeLogin";
import axios from "axios";

const Login = () => {
    const [valores, setValores] = useState({
        email: "",
        password: ""
    });

    const navegacao = useNavigate();

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValores(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    axios.defaults.withCredentials = true;

    useEffect(() => {
    axios.get('http://localhost:7006')
    .then( res => {
      if(res.data.valid){
        navegacao('/')
      }
    })
    .catch(err => console.log(err))
  })

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(ValidacaoDeLogin(valores));

        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:7006/login', valores)
            .then(res => {
                if(res.data === "Login realizado com sucesso!!!"){
                    navegacao("/home");
                } else {
                    alert("Registro inexistente");
                }
            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email"><strong>E-mail</strong></label>
                    <input type="email" placeholder="Digite o seu e-mail" name="email"
                    onChange={handleInput} className="form-control rounded-0"/>
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Senha</strong></label>
                    <input type="password" placeholder="Digite sua senha" name="password"
                    onChange={handleInput} className="form-control rounded-0"/>
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0"><strong>Logar</strong></button>
                <p>Ao se cadastrar você está de acordo com nossos termos e politicas</p>
                <Link to="/cadastrar" className="btn btn-default border w-100 bg-light rounded-0">Criar sua conta</Link>
            </form>
        </div>
    </div>
  )
}
 
export default Login;