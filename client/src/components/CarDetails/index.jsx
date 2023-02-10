import "./style.css"

export default function CardDetails({marca, ano, nomeDoCarro}){
    return (
        <div className="container-details">
            <h2 className="nome-veiculo">{nomeDoCarro}</h2>

            <div className="container-marca-ano">
                <div>
                    <p>Marca</p>
                    <p>{marca}</p>
                </div>
                <div>
                    <p>Ano</p>
                    <p>{ano}</p>
                </div>
            </div>

            <p className="descricao-veiculo">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi tempore quidem, omnis tempora dolores, veniam sint,
                distinctio laboriosam pariatur dolore soluta perferendis placeat
                itaque natus blanditiis neque perspiciatis. Quo, et.
            </p>
            
            <dir class="container-edit">
                <button>Editar</button>
                <img src="../../src/img/ticket.png" alt="" />
            </dir>
        </div>
    );
}