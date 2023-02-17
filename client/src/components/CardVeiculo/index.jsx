import { AiFillTag } from "react-icons/ai";

import "./style.css"
import { useState } from "react";

export default function CardVeiculo({ marca, ano, nomeDoCarro, veiculoSelecionado, id, vendido }) {
    const [statusVeicule, setStatusVeicule] = useState();

    function vender() {
        let color = statusVeicule === "" ? "green" : "";
        setStatusVeicule(color);
    }

    return (
        <div className="card-container" id={id} onClick={veiculoSelecionado}>
            <div className="informacoes-veiculo">
                <div className="marca-ano">
                    <p>
                        <b>{marca}</b>
                    </p>
                    <p className="card-ano-veiculo">{ano}</p>
                </div>

                <p className="card-nome-veiculo">{nomeDoCarro}</p>
            </div>

            <AiFillTag
                size="30px"
                color={vendido ? "#307FFF" : ""}
                className="ticket-venda"
                onClick={vender}
            />
        </div>
    );
}