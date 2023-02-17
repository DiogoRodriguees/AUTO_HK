import React from 'react'
import './style.css'

const ConfirmaDelete = ({confirmou}) => {
  return (
    <div className="container-externo">
      <div className='confirma-delete'>
          <h2>Tem certeza q deseja remover esse veiculo?</h2>
          <div className='container-btn'>
              <button id='sim' onClick={() => confirmou(true)}>SIM</button>
              <button onClick={() => confirmou(false)}>NÃO</button>
          </div>
      </div>
    </div>
  );
}

export default ConfirmaDelete