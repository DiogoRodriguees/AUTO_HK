import CardDetails from "../CarDetails";
import { useState } from "react";

import CardList from "../CardList";

import "./style.css";
import Box from "../Box";

export default function Lista({ list }) {
    const [veiculoSelecionado, setVeiculoSelecionado] = useState();

    function inspecionarVeiculo(e) {
        let position = e.target.id;
        if (veiculoSelecionado !== list[position])
            setVeiculoSelecionado(list[position]);
        else setVeiculoSelecionado("");
    }

    return (
        <div className="container">
            <Box
                titulo={"Lista de veiculos"}
                componente={ <CardList list={list} clicou={inspecionarVeiculo} /> }
            />

            <Box
                titulo={"Detalhes"}
                componente={
                    veiculoSelecionado && (
                        <CardDetails
                            marca={veiculoSelecionado.brand}
                            ano={veiculoSelecionado.year}
                            nomeDoCarro={veiculoSelecionado.name}
                            details={veiculoSelecionado.description}
                            vendido={veiculoSelecionado.sold}
                        />
                    )
                }
            />
        </div>
    );
}
