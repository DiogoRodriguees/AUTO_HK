import { AiFillTag } from "react-icons/ai";

import "./style.css";

export default function CardDetails({
    marca,
    ano,
    nomeDoCarro,
    details,
    vendido,onClick
}) {
    return (
        <div className="container-details">
            <h2 className="nome-veiculo">{nomeDoCarro}</h2>

            <div className="container-marca-ano">
                <div>
                    <p className="marca-ano-titulo">Marca</p>
                    <p>{marca}</p>
                </div>
                <div>
                    <p className="marca-ano-titulo">Ano</p>
                    <p>{ano}</p>
                </div>
            </div>

            <h3>Descrição</h3>
            <p className="descricao-veiculo">{details}</p>

            <dir className="container-edit">
                <button>Editar</button>

                <AiFillTag
                    size="30px"
                    className="ticket-venda"
                    color={vendido ? "#307FFF" : ""}
                />
            </dir>
        </div>
    );
}
