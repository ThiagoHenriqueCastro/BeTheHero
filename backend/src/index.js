const express = require("express"); // importa o express
const cors = require("cors");
const routes = require("./routes");

const app = express(); // inicializa a aplicação

app.use(cors({}));

app.use(express.json()); // Faz com que antes das requisições, os json sejam convertidos em objetos JS
app.use(routes);

app.listen(3333); // faz a aplicação ouvir a porta escolhida
