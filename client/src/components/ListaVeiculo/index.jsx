import CardDetails from "../CarDetails";
import CardVeiculo from "../CardVeiculo";
import "./style.css"

export default function ListaVeiculo(){
    return (
        <div className="container">
            <div className="lista-container">
                <h3 className="lista-titulo">Lista de veiculos</h3>
                <div className="detalhes-lista">
                    <CardVeiculo />
                </div>
            </div>
            <div className="detalhes-container">
                <h3 className="detalhes-titulo">Detalhes</h3>
                <CardDetails/>
            </div>
        </div>
    )
}