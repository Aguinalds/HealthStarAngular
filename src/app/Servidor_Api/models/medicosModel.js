const mongoose = require('mongoose');

const medicosSchema = new mongoose.Schema({

    id: Number,
    nome: {
        type: String,
        required: true,
    },
    especialidade: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('medicos', medicosSchema);