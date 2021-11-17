const mongoose = require('mongoose');

const remedioSchema = new mongoose.Schema({

    id: Number,
    nome: String,
    ciclo: Number,
    tarja: String
});

module.exports = mongoose.model('remedio', remedioSchema);