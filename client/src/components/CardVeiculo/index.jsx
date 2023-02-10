import "./style.css"

export default function CardVeiculo({marca, ano, nomeDoCarro}){
    return (
        <div className="card-container">
            <div className="informacoes-veiculo">
                <p className="card-marca">
                    <b>{marca}</b>
                </p>
                <p className="card-nome-veiculo">{nomeDoCarro}</p>
                <p className="card-ano-veiculo">{ano}</p>
            </div>

            <img className="ticket-compra" src="../../../src/img/ticket.png" alt="" />
        </div>
    );
}