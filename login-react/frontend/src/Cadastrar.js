import { useState } from "react";
import { Link } from "react-router-dom";
import ValidacaoDeCadastro from "./ValidacaoDeCadastro";


const Cadastrar = () => {
    const [valores, setValores] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValores(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(ValidacaoDeCadastro(valores));
    }

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Cadastrar</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name"><strong>Nome Completo</strong></label>
                    <input type="text" placeholder="Digite o seu nome completo" name="name"
                    onChange={handleInput} className="form-control rounded-0"/>
                    {errors.name && <span className="text-danger">{errors.name}</span>}
                </div>
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
                <button type="submit" className="btn btn-success w-100 rounded-0"><strong>Cadastrar</strong></button>
                <p>Ao se cadastrar você está de acordo com nossos termos e politicas</p>
                <Link to="/" className="btn btn-default border w-100 bg-light rounded-0">Vá para a tela de Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Cadastrar;