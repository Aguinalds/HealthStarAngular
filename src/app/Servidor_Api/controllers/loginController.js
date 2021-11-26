const usuarioModel = require('../models/usuarioModel');
const auth = require('../auth/auth');
const bcryptjs = require('bcryptjs');

class loginController {


    async login(req, res){
        const {email, senha} = req.body;
        const usuario = await usuarioModel.findOne({'email': email}).select('+senha');

        if (!usuario) {
            res.status(400).send({error: 'Usuário não encontrado !'});
        }

        if (!await bcryptjs.compare(senha, usuario.senha)){
            res.status(400).send({error: 'Senha inválida!'});
        }

        const token = auth.gerarToken(usuario);
        
        res.status(201).json({id: usuario._id, nome: usuario.nome, email: usuario.email, token: token});
    }    

    async salvar(req, res) {
        const max = await usuarioModel.findOne({}).sort({id: -1});
        let usuario = req.body; 
        usuario.id = max == null ? 1 :  max.id + 1;

        if (await usuarioModel.findOne({'email': usuario.email})) {
            res.status(400).send({error: 'Usuário já cadastrado!'});
        }

        const resultado = await usuarioModel.create(usuario);

        const token = auth.gerarToken(resultado);

        res.status(201).json({id: usuario._id, nome: usuario.nome, email: usuario.email, token: token});
    }

    async listar(req, res) {
        const resultado = await usuarioModel.find({});
        res.status(200).json(resultado);

    }
    
    async buscarPorId(req, res) {
        const id = req.params.usuarioId;
        const resultado = await usuarioModel.findOne({'id': id});
        res.status(200).json(resultado)

    }
    async atualizar(req, res) {
        const id = req.params.usuarioId;
        const _id = String((await usuarioModel.findOne({'id' : id}))._id);
        let usuario = req.body;
        await usuarioModel.findByIdAndUpdate(String(_id), usuario);
        res.status(200).send();
    }

    async excluir(req, res) {
        const id = req.params.usuarioId;
        const _id = String((await usuarioModel.findOne({'id' : id}))._id);
        await usuarioModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }

}

module.exports = new loginController();