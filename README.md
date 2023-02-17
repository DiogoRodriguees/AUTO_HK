![imagem do projeto](./img/img_projeto)

# BACKEND
Desenvolver uma **API RESTful** com **Node** utilizando **Prisma**, que utilize todos os métodos  
[`GET`,`POST`,`PUT`,`PATCH`,`DELETE`]

### Especificações
Monte uma base de veículo com a seguinte estrutura:

    veiculo:   string
    marca:     string
    ano:       integer
    descricao: text
    vendido:   bool
    created:   datetime
    updated:   datetime
Utilize **MySQL** ou **SQLite** para armazenar os dados que a **API** irá consumir.

### API endpoints 
* `GET /veiculos`: Retorna todos os veiculos
* `GET /veiculos/find`: Retorna os veículos de acordo com o termo passado parâmetro `q`
* `GET /veiculos/{id}`: Retorna os detalhes do veículo
* `POST /veiculos`: Adiciona um novo veículo
* `PUT /veiculos/{id}`:Atualiza os dados de um veículo
* `PATCH /veiculos/{id}}`: Atualiza apenas alguns dados do veículo
* `DELETE /veiculos/{id}`: Apaga o veículo


# FRONTEND
### **Especificaçôes**
* Consumir API criado acima
* Criar uma tela que tenha
  * Listagem de veiculos
  * Detalhes do veículo
  * Busca de veículo
  * Formulário para criação/edicção de um veículos
