import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

import Modal from "../Modal";

import "./style.css";

export default function AddVeiculo(adicionarVeiculo) {
    const [addVeiculoStatus, setAddVeiculoStatus] = useState(false);

    function adicionarVeiculo() {
        let status = addVeiculoStatus ? false : true
        setAddVeiculoStatus(status);
    }

    
    return (
        <div className="busca-container">
            <h2 className="busca-titulo">VEÍCULO</h2>
            <BsPlusCircleFill size="30px"className="add-veiculo" onClick={adicionarVeiculo}/>
            {addVeiculoStatus && <Modal fecharModal={adicionarVeiculo}/>}
        </div>
    );
}
