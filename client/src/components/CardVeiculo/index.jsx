import "./style.css"

export default function CardVeiculo(){
    return (
        <div className="card-container">
            <div className="informacoes-veiculo">
                <p className="card-marca">
                    <b>Marca</b>
                </p>
                <p className="card-nome-veiculo">Nome do carro</p>
                <p className="card-ano-veiculo">2000</p>
            </div>

            <img className="ticket-compra" src="../../../src/img/ticket.png" alt="" />
        </div>
    );
}