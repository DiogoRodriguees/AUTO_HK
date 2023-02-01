import "./style.css"

export default function BuscaVeiculo(){
    return (
        <header className="cabecalho-container">
            <h1 className="cabecalho-titulo">AUTO HK</h1>
            <input className="cabecalho-busca" type="text" placeholder='BUSCAR' />
        </header>
    )
}