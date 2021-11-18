const mongoose = require('mongoose');

const medicosSchema = new mongoose.Schema({

    id: Number,
    nome: String,
    especialidade: String,
});

module.exports = mongoose.model('medicos', medicosSchema);