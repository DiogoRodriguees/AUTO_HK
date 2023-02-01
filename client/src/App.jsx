import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>AUTO HK
        <input type="text" placeholder='BUSCAR'/>
      </header>
      <div>
        <div>
          <h2>VEICULO</h2>
          <button>+</button>
        </div>

        <div>
          <div>
            <h3>Lista de veiculos</h3>
          </div>
          <div>
            <h3>Detalhes</h3>
            <ul>
              {/* cards com os carros */}
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
