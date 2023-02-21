import { api } from "./services/api";
import { useEffect, useState } from "react";

import Main from "./components/Main";
import Header from "./components/Header";
import AddVeiculo from "./components/AddVeiculo";

import "./App.css";

function App() {
    const [list, setList] = useState([]);

    const getList = async (text = "") => {
        try {
            // const { data } = await api.get(`/vehicle/find?q=${text}`);
            const { data } = await api.get(`/cars/find?q=${text}`);
            setList(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <div className="container-app-externo">
            <Header buscarVeiculo={getList} />

            <div className="container-app">
                <AddVeiculo />

                <Main list={list} />
            </div>
        </div>
    );
}

export default App;
