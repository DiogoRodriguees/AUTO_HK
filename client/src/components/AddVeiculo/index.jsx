import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

import Modal from "../Modal";

import "./style.css";

export default function AddVeiculo(adicionarVeiculo) {
    const [novoVeiculo, setNovoVeiculo] = useState(false);

    function adicionarVeiculo() {
        let status = novoVeiculo ? false : true
        setNovoVeiculo(status);
    }

    
    return (
        <div className="busca-container">

            <h2 className="busca-titulo">VEÍCULO</h2>

            {/* <BsPlusCircleFill size="30px" className="add-veiculo" onClick={adicionarVeiculo}/> */}
            <button className="add-veiculo">Adicionar</button>
            {novoVeiculo && <Modal fecharModal={adicionarVeiculo}/>}

        </div>
    );
}
