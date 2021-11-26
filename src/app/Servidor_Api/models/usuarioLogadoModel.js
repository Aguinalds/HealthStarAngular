const mongoose = require('mongoose');
const auth = require('../auth/auth');
const bcryptjs = require('bcryptjs');

const usuarioLogadoSchema = new mongoose.Schema({
    usuarioId: {type: mongoose.Schema.Types.ObjectId, ref: 'usuario'},
});

module.exports = mongoose.model('usuarioLogado', usuarioLogadoSchema);