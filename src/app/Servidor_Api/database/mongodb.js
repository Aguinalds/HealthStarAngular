const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/banco_health_star';

const db = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const con = mongoose.connection;

con.on('open', function(){
    console.log('Conectado ao MongoDb!');
});


con.on('error', function(){
    console.log('Erro na conexão do MongoDb!');
});


con.on('close', function(){
    console.log('Desconectado ao MongoDb!');
});

module.exports = db;