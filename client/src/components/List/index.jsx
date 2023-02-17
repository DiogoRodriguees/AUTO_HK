import CardDetails from "../CarDetails";
import { useState } from "react";

import CardList from "../CardList";

import "./style.css";

export default function Lista({ list }) {
    const [veiculoSelecionado, setVeiculoSelecionado] = useState();

    function inspecionarVeiculo(e) {
        let position = e.target.id
        if(veiculoSelecionado !== list[position])
            setVeiculoSelecionado(list[position])
        else
            setVeiculoSelecionado('')
        
    }

    return (
        <div className="container">
            <div className="lista-container">
                <h3>Lista de veiculos</h3>

                <CardList list={list} clicou={inspecionarVeiculo} />
            </div>

            <div className="detalhes-container">
                <h3>Detalhes</h3>
                {veiculoSelecionado && (
                    <CardDetails
                        marca={veiculoSelecionado.brand}
                        ano={veiculoSelecionado.year}
                        nomeDoCarro={veiculoSelecionado.name}
                        details={veiculoSelecionado.description}
                        vendido={veiculoSelecionado.sold}
                    />
                )}
            </div>
        </div>
    );
}
