const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({

    id: Number,
    medico: String,
    especialidade: String,
    data: Date,
    valor: String
});

module.exports = mongoose.model('consultas', consultaSchema);