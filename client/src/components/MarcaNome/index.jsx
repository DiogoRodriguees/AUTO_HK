import React from 'react'
import "./style.css"

const MarcaNome = ({textoNegrito, texto}) => {
  return (
    <div>
        <p className='texto-negrito'>{textoNegrito}</p>
        <p>{texto}</p>
    </div>
  )
}

export default MarcaNome