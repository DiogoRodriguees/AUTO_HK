import React from 'react'
import "./style.css"

const Box = ({titulo, componente}) => {
  return (
      <div className="box-container">
          <h3>{titulo}</h3>
          {componente}
      </div>
  );
}

export default Box