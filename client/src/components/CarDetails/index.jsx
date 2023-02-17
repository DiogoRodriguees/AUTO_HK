import { AiFillTag } from "react-icons/ai";

import "./style.css";
import MarcaNome from "../MarcaNome";
import { useState } from "react";
import Modal from "../Modal";

export default function CardDetails({
    marca,
    ano,
    nomeDoCarro,
    details,
    vendido,
    id,
}) {
    const [editar, setEditar] = useState(false)

    function editarVeiculo() {
        let status = editar ? false : true;
        setEditar(status);
    }
    
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
                <button onClick={editarVeiculo}>Editar</button>

                <AiFillTag
                    size="40px"
                    className="ticket-venda"
                    color={vendido ? "#307FFF" : ""}
                />
            </dir>

           {editar && <Modal fecharModal={editarVeiculo} id={id} editar={true} name={nomeDoCarro} brand={marca} year={ano} description={details} sold={vendido} />}
        </div>
    );
}
