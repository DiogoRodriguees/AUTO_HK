import CardDetails from "../CarDetails";
import { useState } from "react";

import CardList from "../CardList";

import "./style.css";
import Box from "../Box";

export default function Main({ list }) {
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
                            id={veiculoSelecionado.id}
                            marca={veiculoSelecionado.marca}
                            ano={veiculoSelecionado.ano}
                            nomeDoCarro={veiculoSelecionado.veiculo}
                            details={veiculoSelecionado.desc}
                            vendido={veiculoSelecionado.vendido}
                        />
                    )
                }
            />
        </div>
    );
}
