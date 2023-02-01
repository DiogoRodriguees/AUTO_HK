import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AddVeiculo from './components/AddVeiculo';
import BuscaVeiculo from './components/BuscaVeiculo';
import ListaVeiculo from './components/ListaVeiculo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BuscaVeiculo/>
      <div>
        <AddVeiculo/>

        <ListaVeiculo/>
      </div>
      
    </div>
  )
}

export default App
