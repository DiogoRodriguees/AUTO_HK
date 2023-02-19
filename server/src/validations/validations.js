import * as yup from "yup";
/*const yup = require('yup');

export const create = async (req, res) => {

    /*const schema = yup.object().shape({
        veiculo:yup.string().required(),
        marca:yup.string().required(),
        ano:yup.number().required().positive().integer(),
        desc:yup.string().required(),
        vendido:yup
    });
    if(!(await schema.isValid(req.body))){
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: faltando informacoes"
        });
    };
    

    return res.json({
        erro: false,
        mensagem: "dados validados"
    });
    */

export const schema = yup.object({
veiculo: yup.string("Erro: necessario preencher campo veiculo").required(),
marca: yup.string("Erro: necessario preencher campo veiculo").required(),
ano: yup.number().required().positive().integer(),
desc: yup.string("Erro: faltando desc").required(),
vendido: yup.boolean().required(),
});

/*try{
await schema.validate(req.body);
}catch(err){
return res.status(400).json({
    erro: true,
    mensagem: err.errors
})
}


return res.json({
    erro: false,
    mensagem: "dados validados"
});
}*/
