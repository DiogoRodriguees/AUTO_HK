import "./style.css";

export default function CadastroVeiculo() {
    return (
        <div>
            <div className="cadastro-container">

                <h2>Novo Veiculo</h2>
                <div className="informacoes-container">
                    <input type="text" placeholder="Nome veiculo" />
                    <input type="text" placeholder="Ano" />
                    <input type="text" placeholder="Marca" />
                    <button className="status-veiculo"></button>
                </div>

                <p>Descriçao</p>
                <input type="text" className="box-descricao" />

                <div className="cadastro-botoes">
                    <button>ADD</button>
                    <button>FECHAR</button>
                </div>
            </div>
        </div>
    );
}
