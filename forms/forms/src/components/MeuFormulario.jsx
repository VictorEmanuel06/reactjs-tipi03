import "./MeuFormulario.css";

import { useState } from "react";

const MeuFormulario = () => {
    // gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [biografia, setBiografia] = useState("");
    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    console.log(name, email);

    // Envio do form
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, biografia, role);

    // Limpar formulário
    setName("");
    setEmail("");
    setBiografia("");
    setRole("");
    }

 

  return (
    <div>
        {/* Criação do form */}
        {/* Envio de Formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" 
                onChange={handleName} value={name || ""} />
            </div>

            {/* label envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input text="text" name="email" placeholder="Digite o seu e-mail" 
                onChange={(e) => setEmail(e.target.value)} value={email || ""} />
            </label>

            {/* textarea */}
            <label>
                <span>Biografia:</span>
                <textarea name="biografia" placeholder="Descrição do usuário"
                onChange={(e) => setBiografia(e.target.value)} value={biografia || ""}>
                </textarea>
            </label>

            {/* Select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)}
                value={role || ""}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MeuFormulario