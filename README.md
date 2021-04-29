<h1 align="center"> Catálogo de Moedas - CriptoInvesting</h1>
<p align="center">O catálogo de moedas CriptoInvesting é uma atividade que faz parte da segunda fase do processo seletivo da FFIT - Serviços de Inovação e Tecnologia</p>

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
Git, Node.js.
Além disto é bom ter um editor para trabalhar com o código como VSCode



## Clone este repositório
$ git clone <https://github.com/Weslley049/Catalogo-de-Moedas----FFIT>

## Acesse a pasta do projeto no terminal/cmd
$ cd Catalogo-de-Moedas--FFIT

## Vá para a pasta backend
$ cd backend

## Instale as dependências
$ npm install

## Execute a aplicação em modo de desenvolvimento
$ yarn dev:server

## O servidor backend inciará na porta:3333 - acesse <http://localhost:3333> 

## Vá para a pasta frontend
$ cd frontend

## Instale as dependências
$ npm install

## Execute a aplicação 
$ yarn dev

## O servidor frontend inciará na porta:3000 - acesse <http://localhost:3000> 

## Para geração do banco usando as migrations do knex execute a seguinte linha 
$ knex:migrate

## Para o rollback das migrations utilize
$ knex:migrate:rollback:

## Tecnologias utilizadas 
As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)

<h4>Depedências para o backend da aplicação</h4>
- Express 4.17.1 <br>
- knex: 0.21.2  <br>
- sqlite3: 5.0.2 <br>
- ts-node-dev: 1.1.6

<h4>Dependências para o frontend da aplicação</h4>
- axios 0.21.1 <br>
- sass 1.32.11
