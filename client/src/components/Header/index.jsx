import { ImDroplet } from "react-icons/im";
import { useEffect, useState } from "react";

import "./style.css";

export default function Header({buscarVeiculo}) {

    const [text, setText] = useState('')

    useEffect(() => {
        buscarVeiculo(text)
    }, [text])

    return (
        <header className="cabecalho-container">
            <h1>
                <ImDroplet size="30px" />
                AUTO HK
            </h1>

            <input
                className="cabecalho-busca"
                type="text"
                placeholder="BUSCAR"
                onChange={(e) => setText(e.target.value)}
            />
        </header>
    );
}
