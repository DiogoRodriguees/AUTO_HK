import AddVeiculo from './components/AddVeiculo';
import BuscaVeiculo from './components/BuscaVeiculo';
import ListaVeiculo from './components/ListaVeiculo';
import './App.css'

function App() {

  return (
    <div className="App">
      <BuscaVeiculo/>
      <div className="container-app">
        <AddVeiculo/>

        <ListaVeiculo/>
      </div>
      
    </div>
  )
}

export default App
