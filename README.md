# CRUD Gestão de livros

Este é um projeto API RESTful para o gerenciamento de livros. Colocando em prática conceitos de Arquitetura em camadas.

## Funcionalidades

- Lista todos os livros cadastrados.
- Busca o livro pelo titulo.
- Cria um novo livro.
- Atualiza livros.
- Exclui livros.

## Stack utilizada

- Typescript
- Node.js
- Express
- Prisma
- postgresql (Banco de dados)

## Arquitetura do projeto

src/

    controllers/   (Responsável por receber as requisições HTTP e enviar as respostas)
    lib/     (Configurações de bibliotecas externas)
    mocks/      (Dados temporários para testes)
    routes/      (Endpoints da API)
    services/  (Onde a logica de negocio acontece)
    sercer.ts       (Inicializa a API)

Essa estrutura foi pensado nos conceitos base da arquitetura de camadas

## Routes da API

| Método     | Rota             | Descrição                              |
| :--------- | :--------------- | :------------------------------------- |
| **GET**    | `/livros`        | Lista todos os livros cadastrados.     |
| **GET**    | `/livros/buscar` | Busca um livro específico pelo título. |
| **POST**   | `/livros`        | Cadastra um novo livro.                |
| **PUT**    | `/livros/:id`    | Atualiza as informações de um livro.   |
| **DELETE** | `/livros/:id`    | Remove um livro.                       |

## Deploy

### Como fazer deploy:

- **Faça fork ou clone do repositório**

```bash
git clone
```

- **Instale as dependencias**

```bash
npm install
```

- **Configure as variáveis de ambiente**
  Crie um aquirvo .env

Adicione a URL do seu database

```
DATABASE_URL="sua_url_aqui"
```

obs. não é necessário adicionar um banco de dados, foi criado um mock para fazer testes rapidos

ex:

```
  async getLivroByTitulo(titulo: string) {
    const livro = getLivroByTituloMock;
    return livro;
    //return await prisma.livro.findFirst
    //   where: {
    //     titulo: {
    //       contains: titulo,
    //       mode: "insensitive",
    //     },
    //   },
    // });
  }
```

Para utilizar o banco de dados, basta fazer a troca do return que está comentado "//"

## Referência

- [Docs Prisma](https://www.prisma.io/docs/postgres/getting-started)
- [Artigo na Dio](https://www.dio.me/articles/entendendo-controllers-services-e-repositories-em-aplicacoes-nodejs-com-typescript)
- [Video aula Youtube](https://www.youtube.com/watch?v=TYB-Lz8YGFk)
