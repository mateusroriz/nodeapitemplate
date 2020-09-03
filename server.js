const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express(); //iniciando o app com express
app.use(express.json()); //permitir o envio de dados para a aplicação em formato JSON
app.use(cors());


//iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser:true});

//mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser:true});

requireDir('./src/models');



//Rotas
app.use('/api', require('./src/routes')); //use recebe todas as requisições


app.listen(3001); //setando a porta 3001

//npm run dev