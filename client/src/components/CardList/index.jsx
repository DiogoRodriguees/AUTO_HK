import CardVeiculo from "../CardVeiculo";

import "./style.css"

const CardList = ({list , clicou}) => {


    return (
        <div className="card-lista">
            {list.map((veiculo, index) => (
                <CardVeiculo
                    id={index}
                    marca={veiculo.brand}
                    ano={veiculo.year}
                    nomeDoCarro={veiculo.name}
                    key={veiculo.id}
                    vendido={veiculo.sold}
                    veiculoSelecionado={clicou}
                />
            ))}
        </div>
    );
};

export default CardList;
