<h1 align="center">API Rest Com MySQL + Mocha + Chai</h1>

## `📋Sobre`
Api rest criado com NodeJs e banco de dados MySql, métodos (GET, PUT, UPDATE, DELETE).

### Dependências utilizadas
* [body-parser](https://www.npmjs.com/package/body-parser)
* [cors](https://www.npmjs.com/package/cors)
* [mysql2](https://www.npmjs.com/package/mysql2)
* [sequelize](https://www.npmjs.com/package/sequelize)
* [express](https://www.npmjs.com/package/express)

---

## `Teste com mocha e chai`
Na pasta teste contém todos os teste criados com mocha e chai, os métodos (GET, PUT, UPDATE, DELETE) são todos testados.

Para rodar os testes execute a linha de comando abaixo.
```
npm run test
```

## `Git clone`

Clone o repositório GitHub em sua máquina.
```
git clone https://github.com/AAndersonSantos/rest-api-nodejs-mysql-mocha-chai.git
```
Execute o comando `npm install` para obter todos os pacotes necessários.

Necessário configurar o arquivo db.config.js na pasta database/config/db.config.js utilizar as informações do seu banco de dados, nome database(DB), nome do usuário(USER), senha(PASSWORD), e descomente a linha de código 45 na pasta models/posts.js para criar a tabela automaticamente em seu banco de dados mySQL.

Execute o comando `npm start server.js` para iniciar a API o servidor vai rodar na porta 8081 ou 8080.

---
<br>
<h3 align="center">Criado por🤖Anderson Santos</h3>


