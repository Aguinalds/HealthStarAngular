const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({

    id: Number,
    medico: {
        type: String,
    },
    data: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    valor: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('consultas', consultaSchema);