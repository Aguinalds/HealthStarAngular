const mongoose = require('mongoose');
const auth = require('../auth/auth');
const bcryptjs = require('bcryptjs');

const usuarioSchema = new mongoose.Schema({

    id: Number,
    nome: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    senha: {
        type: String,
        required: true,
        select: false
    },
    dataCriacao: {
        type: Date,
        default: Date.now,
    }
});

usuarioSchema.pre('save', async function (next) {
    const hash = await bcryptjs.has(this.senha, 10);
    this.senha = hash;
    next();
});

module.exports = mongoose.model('usuario', usuarioSchema);