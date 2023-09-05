# Tech Challenge - Pós-Tech SOAT - FIAP

Alunos:
  
* Pedro Henrique de Marins da Silva - RM348617
* Rogério Sampaio Stubs -  RM349115
* Gustavo Jorge Franco Teles dos Santos - RM349553
## O PROBLEMA

Há uma lanchonete de bairro que está expandindo devido seu grande sucesso. Porém, com a expansão e sem um sistema de controle de pedidos, o atendimento aos clientes pode ser caótico e confuso. Por exemplo, imagine que um cliente faça um pedido complexo, como um hambúrguer personalizado com ingredientes específicos, acompanhado de batatas fritas e uma bebida. O atendente pode anotar o pedido em um papel e entregá-lo à cozinha, mas não há garantia de que o pedido será preparado corretamente.

Sem um sistema de controle de pedidos, pode haver confusão entre os atendentes e a cozinha, resultando em atrasos na preparação e entrega dos pedidos. Os pedidos podem ser perdidos, mal interpretados ou esquecidos, levando à insatisfação dos clientes e a perda de negócios.

Em resumo, um sistema de controle de pedidos é essencial para garantir que a lanchonete possa atender os clientes de maneira eficiente, gerenciando seus pedidos e estoques de forma adequada. Sem ele, expandir a lanchonete pode acabar não dando certo, resultando em clientes insatisfeitos e impactando os negócios de forma negativa.

Para solucionar o problema, a lanchonete irá investir em um sistema de autoatendimento de fast food, que é composto por uma série de dispositivos e interfaces que permitem aos clientes selecionar e fazer pedidos sem precisar interagir com um atendente, com as seguintes
funcionalidades:

## ENTREGA FASE 1

- Documentação do sistema (DDD) utilizando a linguagem ubíqua, dos seguintes fluxos:
  - Realização do pedido e pagamento
  - Preparação e entrega do pedido
- Uma aplicação para todo sistema de backend (monolito) que deverá ser desenvolvido seguindo os padrões apresentados nas aulas:
  - Utilizando arquitetura hexagonal
  - APIs:
    - Cadastro do Cliente
    - Identificação do Cliente via CPF
    - Criar, editar e remover de produto
    - Buscar produtos por categoria
    - Fake checkout, apenas enviar os produtos escolhidos para a fila
    - Listar os pedidos
  - Aplicação deverá ser escalável para atender grandes volumes nos horários de pico
  - Banco de dados a sua escolha
  - Inicialmente deveremos trabalhar e organizar a fila dos pedidos apenas em banco de dados
  - A aplicação deve ser entregue com um Dockerfile configurado para executá-la corretamente.
  - Para validação da POC, temos a seguinte limitação de infraestrutura:
    - 1 instância para banco de dados
    - 1 instâncias para executar aplicação

## Arquitetura

A arquitetura dessa API segue os princípios de Arquitetura Hexagonal (Ports and Adapters). Essa arquitetura pode ser dividida em duas partes:

  - Condutores: (ou atores primários): Podem ser definidos como atores que iniciam a interação. Por exemplo, um condutor pode ser um controller que recebe um input de um usuário e redireciona a aplicação utilizando uma Port(interface).
  - Conduzidos: (também conhecido como atores secundários): São parte da camada de infrasctructure da aplicação. Podem ser utilizados para adicionar funcionalidades para o domínio da aplicação. Exemplos: Banco de dados, APIs externas.

![Untitled Diagram drawio](https://github.com/rickwalking/projeto-lanchonete/assets/25574889/12ddab40-97ec-4157-a1ae-803d258654ea)

  * Esquema de Domain Driven Design (DDD) no [Miro](https://miro.com/welcomeonboard/TG9pRTJMU1BNb2d4WUZvdE9PVHd1cEZudmpaczNhdDNMOVVmeDE0S0VOZkVDSmFDSG5uaU0waUZzdFV5Q1h5aXwzNDU4NzY0NTU1MDkxMDI0MTAxfDI=?share_link_id=171801921364)

## Projeto

[Gituhb](https://github.com/rickwalking/projeto-lanchonete)

Este projeto está pronto para ser executado em um ambiente Docker. Por este motivo, será necessária apenas a instalação do Docker, não sendo necessária a instalação manual do projeto. Também não será necessária a instalação manual do banco de dados.

Caso não tenha o Docker instalado, siga as instruções para seu sistema operacional na [documentação oficial do Docker](https://docs.docker.com/get-docker/).

### Para executar em ambiente de desenvolvimento:

* Clone este repositório em seu computador;
* Entre no diretório local onde o repositório foi clonado;
* Altere o arquivo .env.example para .env 
* Preencha os campos dentro arquivo
* Utilize o comando ` docker compose up --build` para "build" e subir o servidor local e expor a porta 3000 em `localhost`. Além de `dev` também subirá o serviço `db` com o banco de dados de desenvolvimento.

**IMPORTANTE:** Esta API está programada para ser acessada a partir de `http://localhost:3000` e o banco de dados utiliza a porta `5432`. Certifique-se de que não existam outros recursos ocupando as portas acima.

Para desativar os serviços, execute o comando `docker-compose down`.

## Endpoints

A API expõe os seguintes *endpoints* a partir da *base URL* `localhost:3000`:

[Swagger Path](http://localhost:3000/api#/)

### `/usuario`
- `POST` - Criar usuário
  - Body
   ```
  {
    "cpf": "string",
    "nome": "string",
    "email": "string"
  }
  ```
- `POST /identificar/` - Identificar usuário
  - Body
   ```
  {
    "cpf": "string"
  }
  ```


### `/produto`
- `POST` - Criar produto
  - Body
   ```
  {
    "nome": "string",
    "preco": "number",
    "descricao": "string",
    "quantidade": "string",
    "categoria": {
      "nome": "string"
    }
  }
  ```
- `GET` - Listar produtos por categoria
  - QueryParams - nomeCategoria
- `DELETE /:id` - Deletar produto
- `PUT /:id`
  - Body
   ```
  {
    "nome": "string",
    "preco": "number",
    "descricao": "string",
    "quantidade": "string",
    "categoria": {
      "nome": "string"
    }
  }
  ```
### `/pedido`
- `POST /pagar/:pedido_id` - Pagar pedido pelo id
- `PUT /preparo/:pedido_id` - Iniciar pedido
- `PUT /pronto/:pedido_id` - Marcar como pronto
- `PUT /entregue/:pedido_id` - Marcar como entregue
- `PUT /:pedido_id` - Atualizar pedido
  - Body
   ```
  {
    "produtos": ["number"],
    "status": "EtapasPedido",
  }
- `GET /fila` - Retorna o item na fila
