const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({

    id: Number,
    medico: String,
    data: Date,
    valor: String
});

module.exports = mongoose.model('consultas', consultaSchema);