import { ImDroplet } from "react-icons/im";
import { useEffect, useState } from "react";

import "./style.css";

export default function Header({buscarVeiculo}) {

    const [text, setText] = useState('')

    useEffect(() => {
        buscarVeiculo(text)
    }, [text])

    return (
        <header className="cabecalho">
            <div>
                <ImDroplet size="30px" />
                <h1>AUTO HK</h1>
            </div>

            <input
                type="text"
                placeholder="BUSCAR"
                onChange={(e) => setText(e.target.value)}
            />
        </header>
    );
}
