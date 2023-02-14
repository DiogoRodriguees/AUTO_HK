import AddVeiculo from "./components/AddVeiculo";
import BuscaVeiculo from "./components/BuscaVeiculo";
import ListaVeiculo from "./components/ListaVeiculo";
import "./App.css";
import CadastroVeiculo from "./components/CadastroVeiculo";

function App() {
    return (
        <div className="App">
            <section className="container-app-externo">
                <BuscaVeiculo />

                <div className="container-app">
                    <AddVeiculo />

                    <ListaVeiculo />
                </div>
            </section>
        </div>
    );
}

export default App;
