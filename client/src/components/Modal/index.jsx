import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { api } from "../../services/api";

import ConfirmaDelete from "../ConfirmDeleteModal";

import "./style.css";

export default function Modal({
    fecharModal,
    name = "",
    year = 0,
    brand = "Chevrolet",
    description = "",
    sold = false,
    id = 0,
    editar = false,
}) {
    const [vendido, setVendido] = useState("Não Vendido");
    const [tipoDeInput, setTipoDeInput] = useState("select")
    const [marcas, setMarcas] = useState([
        "Chevrolet",
        "Ford",
        "Fiat",
        "Volkswagem",
        "Porsche",
        "Volvo",
        "Toyota",
    ]);
    const [confirmaDelete, setConfirmaDelete] = useState(false);

    const addVeiculo = async (veiculo) => {
        try {
            const { data } = await api.post(`/vehicle`, veiculo);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const editarVeiculo = async (veiculo) => {
        try {
            const { data } = await api.put(`/vehicle/${id}`, veiculo);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    function onSubmit(values) {
        let novoVeiculo = {
            name: values.name,
            brand: values.brand,
            year: values.year,
            description: values.description,
            sold: values.sold,
        };

        if (!editar) {
            addVeiculo(novoVeiculo);
            fecharModal();
        }

        editarVeiculo(novoVeiculo);
        fecharModal();
        window.location.reload();
    }

    const deletar = async () => {
        try {
            const { data } = await api.delete(`/vehicle/${id}`);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    function deletarVeiculo() {
        deletar();
        fecharModal();
        window.location.reload();
    }

    function confirmou(status) {
        if (status) {
            deletarVeiculo();
        } else {
            setConfirmaDelete(false);
        }
    }

    function alteraBotao(status) {
        if (!status) {
            setVendido("Vendido");
        } else {
            setVendido("Não Vendido");
        }
    }

    return (
        <div className="container-fora">
            <div className="cadastro-container">
                <Formik
                    required
                    onSubmit={onSubmit}
                    initialValues={{
                        name: name,
                        year: year,
                        brand: brand,
                        description: description,
                        sold: sold,
                    }}
                    component={({ values, handleChange }) => (
                        <Form>
                            <h1>Novo Veiculo</h1>

                            <div className="informacoes-container">
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Veiculo"
                                    className="input"
                                />
                                <Field
                                    type="number"
                                    name="year"
                                    placeholder="Ano"
                                    className="input"
                                />

                                <Field
                                    component={tipoDeInput}
                                    type="text"
                                    name="brand"
                                    placeholder="Marca"
                                    className="input-marca"
                                >
                                    {marcas.map((marca) => (
                                        <option value={marca}>{marca}</option>
                                    ))}
                                </Field>

                                <Field
                                    type="checkbox"
                                    name="sold"
                                    className="nao-vendido"
                                    onClick={() => {
                                        alteraBotao(values.sold);
                                    }}
                                />
                                {vendido}
                                {/* <label htmlFor="sold">{vendido}</label> */}
                            </div>

                            <div className="descriçao">
                                <label className="descricao-titulo">
                                    Descricao
                                </label>
                                <Field
                                    component="textarea"
                                    type="textarea"
                                    name="description"
                                    className="box-descricao"
                                />
                            </div>

                            <div className="cadastro-botoes">
                                <button type="submit">
                                    {editar ? "Salvar" : "ADD"}
                                </button>

                                <button onClick={fecharModal}>Fechar</button>
                                {editar && (
                                    <button
                                        id="btnDelete"
                                        onClick={() => setConfirmaDelete(true)}
                                    >
                                        Deletar
                                    </button>
                                )}
                            </div>
                        </Form>
                    )}
                />
                {confirmaDelete && <ConfirmaDelete confirmou={confirmou} />}
            </div>
        </div>
    );
}
