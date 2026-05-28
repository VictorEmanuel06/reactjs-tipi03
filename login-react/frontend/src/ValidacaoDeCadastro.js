function ValidacaoDeCadastro(valores){
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(valores.name === ""){
        error.name = "O campo não pode estar vazio";
    }
    else{
        error.name = "";
    }
    
    if(valores.email === ""){
        error.email = "O campo não pode estar vazio";
    }
    else if(!email_pattern.test(valores.email)){
        error.email = "Preenchimento incorreto, exemplo: teste@teste.com";
    }
    else{
        error.email = "";
    }

    if(valores.password === ""){
        error.password = "O campo não pode estar vazio";
    }
    else if(!password_pattern.test(valores.password)){
        error.password = "A senha tem que ter no mínimo 1 letra maiúscula, minúscula, número e símbolo, até 8 caracteres";
    }
    else {
        error.password = "";
    }

    return error;
}

export default ValidacaoDeCadastro;