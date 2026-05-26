const DetalhesdoCarro = ({marca, km, cor}) => {
  return (
    <div>
        <h2>Detalhes do Carro: </h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>Kilometragem: {km}</li>
            <li>Cor: {cor}</li>
        </ul>
    </div>
  )
}

export default DetalhesdoCarro;
