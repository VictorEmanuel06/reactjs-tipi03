const TemplateExpressions = () => {

    //declarando uma constante
    const nome = "Ana";

    //declarando um objeto
    const dados = {
        idade: 36,
        profissao: "Professora"
    }

  return (
    <div>
        <p> A soma é { 4 + 9 } </p>
        <h3>Boas-vinda {nome}</h3>
        <p>Vi aqui que você tem {dados.idade} anos e é {dados.profissao}</p>
    </div>
  )
}

export default TemplateExpressions;