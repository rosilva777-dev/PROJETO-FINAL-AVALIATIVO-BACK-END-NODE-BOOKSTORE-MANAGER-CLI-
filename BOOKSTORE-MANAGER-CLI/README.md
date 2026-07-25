# BOOKSTORE MANAGER CLI

Sistema de gerenciamento de livraria desenvolvido em Node.js, TypeScript e PostgreSQL.

## Tecnologias

- Node.js
- TypeScript
- PostgreSQL
- Prompt-Sync

---

## Arquitetura

Controller

↓

Service

↓

Repository

↓

PostgreSQL

---

## Estrutura

```
BOOKSTORE-MANAGER-CLI

src
│
├── controllers
├── services
├── repositories
├── models
├── database
├── menus
├── utils
└── main.ts

```
## Instalação

Instale as dependências

npm install

## Banco

Execute

schema.sql

## Configurar .env

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=122130
DB_NAME=BOOKSTORE-MANAGER-CLI

```

## Executar

npm run dev

```
## Compilar

npm run build


## Executar versão compilada

```
npm start
```

---

## Funcionalidades

### Autores

- Cadastrar
- Listar
- Excluir

### Livros

- Cadastrar
- Listar

### Clientes

- Cadastrar
- Listar

### Empréstimos

- Registrar empréstimo
- Registrar devolução

---

## Consultas SQL

- JOIN
- GROUP BY
- ORDER BY
- LIMIT
- COUNT

---

## Desenvolvido com

- Programação Orientada a Objetos
- Interfaces
- Async/Await
- Arquitetura em Camadas

