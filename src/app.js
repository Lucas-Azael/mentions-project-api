const express = require('express');

// App
const app = express();

//Carregando rotas do arquivos index-routes
//E colocando como primeira rota: '/'
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

module.exports = app;

