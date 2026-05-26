// 3 - importando hierarquia de componente
import HierarquiaComponente from "./HierarquiaComponente";

//Comentário criado: componente
const PrimeiroComponente = () => {
    return(
        <div>
            <h2>Meu primeiro componente</h2>
            <HierarquiaComponente />
        </div>
    );
};

export default PrimeiroComponente;