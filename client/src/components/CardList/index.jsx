import CardVeiculo from "../CardVeiculo";

import "./style.css"

const CardList = ({list , clicou}) => {


    return (
        <div className="card-lista">
            {list.map((veiculo, index) => (
                <CardVeiculo
                    id={index}
                    marca={veiculo.marca}
                    ano={veiculo.ano}
                    nomeDoCarro={veiculo.veiculo}
                    key={veiculo.id}
                    vendido={veiculo.vendido}
                    veiculoSelecionado={clicou}
                />
            ))}
        </div>
    );
};

export default CardList;
