const mongoose = require('mongoose');

const remedioSchema = new mongoose.Schema({

    id: Number,
    nome: {
        type: String,
        required: true,
    },
    ciclo: {
        type: Number,
        required: true,
    },
    tarja: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('remedio', remedioSchema);