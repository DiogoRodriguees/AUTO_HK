import { AiFillTag } from "react-icons/ai";

import "./style.css";
import MarcaNome from "../MarcaNome";

export default function CardDetails({
    marca,
    ano,
    nomeDoCarro,
    details,
    vendido,
}) {
    return (
        <div className="container-details">
            <h2 className="nome-veiculo">{nomeDoCarro}</h2>

            <div className="container-marca-ano">
                <MarcaNome textoNegrito={"Marca"} texto={marca} />
                <MarcaNome textoNegrito={"Ano"} texto={ano} />
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
