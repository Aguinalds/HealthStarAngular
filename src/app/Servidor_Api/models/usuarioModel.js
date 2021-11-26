const mongoose = require('mongoose');
const auth = require('../auth/auth');
const bcryptjs = require('bcryptjs');

const usuarioSchema = new mongoose.Schema({

    id: Number,
    nome: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    senha: {
        type: String,
        select: false
    },
    dataCriacao: {
        type: Date,
        default: Date.now,
    },
    token: {
        type: String,
        select: false
      }
    
});

usuarioSchema.pre('save', async function (next) {
    const hash = await bcryptjs.hash(this.senha, 4);
    this.senha = hash;
    next();
});

module.exports = mongoose.model('usuario', usuarioSchema);