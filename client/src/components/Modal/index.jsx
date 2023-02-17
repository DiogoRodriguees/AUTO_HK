import { Formik, Field, Form } from "formik";
import { useState } from "react";

import { api } from "../../services/api";

import "./style.css";

export default function Modal({ fecharModal }) {
    const [vendido, setVendido] = useState("Não Vendido");

    const addVeiculo = async (veiculo) => {
        try {
            const { data } = await api.post(`/vehicle`, veiculo);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    function onSubmit(values, action) {
        let novoVeiculo = {
            name: values.name,
            brand: values.brand,
            year: values.year,
            description: values.description,
            sold: values.sold,
        };

        addVeiculo(novoVeiculo);
        fecharModal();
    }

    function alteraBotao(status) {
        if (!status) {
            setVendido("Vendido");
        } else {
            setVendido("Não Vendido");
        }
    }

    return (
        <div className="cadastro-container">
            <Formik
                onSubmit={onSubmit}
                initialValues={{
                    name: "",
                    year: 0,
                    brand: "",
                    description: "",
                    sold: false,
                }}
                component={({ values }) => (
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
                                type="text"
                                name="brand"
                                placeholder="Marca"
                                className="input"
                            />
                            <Field
                                type="checkbox"
                                name="sold"
                                className="nao-vendido"
                                onClick={() => {
                                    alteraBotao(values.sold);
                                }}
                            />
                            {vendido}
                        </div>

                        <div>
                            <label className="descricao-titulo">
                                Descricao
                            </label>
                            <Field
                                type="text"
                                name="description"
                                className="box-descricao"
                            />
                        </div>

                        <div className="cadastro-botoes">
                            <button type="submit">ADD</button>
                            <button onClick={fecharModal}>Fechar</button>
                        </div>
                    </Form>
                )}
            />
        </div>
    );
}
