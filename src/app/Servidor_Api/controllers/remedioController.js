const remedioModel = require('../models/remedioModel');

class RemedioController {

    async salvar(req, res) {
        const max = await remedioModel.findOne({}).sort({id: -1});
        let remedio = req.body;
        remedio.id = max == null ? 1 :  max.id + 1;
        const resultado = await remedioModel.create(remedio);
        res.status(201).json(resultado);
    }


    async listar(req, res) {
        const resultado = await remedioModel.find({});
        res.status(200).json(resultado);

    }

    async buscarPorId(req, res) {
        const id = req.params.remedioId;
        const resultado = await remedioModel.findOne({'id': id});
        res.status(200).json(resultado)

    }


    async atualizar(req, res) {
        const id = req.params.remedioId;
        const _id = String((await remedioModel.findOne({'id' : id}))._id);
        let remedio = req.body;
        await remedioModel.findByIdAndUpdate(String(_id), remedio);
        res.status(200).send();
    }


    async excluir(req, res) {
        const id = req.params.remedioId;
        const _id = String((await remedioModel.findOne({'id' : id}))._id);
        await remedioModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new RemedioController();