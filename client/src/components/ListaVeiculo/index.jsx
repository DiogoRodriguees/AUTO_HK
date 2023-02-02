import CardVeiculo from "../CardVeiculo";
import "./style.css"

export default function ListaVeiculo(){
    return (
        <div className="container">
            <div className="lista-container">
                <h3 className="lista-titulo">Lista de veiculos</h3>
                <ul className="detalhes-lista">
                    <CardVeiculo />
                </ul>
            </div>
            <div className="detalhes-container">
                <h3 className="detalhes-titulo">Detalhes</h3>
                
            </div>
        </div>
    )
}