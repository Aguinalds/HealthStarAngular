const consultasModel = require('../models/consultasModel');

class consultasController {


    async salvar(req, res) {
        const max = await consultasModel.findOne({}).sort({id: -1});
        let consultas = req.body;
        consultas.id = max == null ? 1 :  max.id + 1;
        const resultado = await consultasModel.create(consultas);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await consultasModel.find({});
        res.status(200).json(resultado);

    }
    
    async buscarPorId(req, res) {
        const id = req.params.consultasId;
        const resultado = await consultasModel.findOne({'id': id});
        res.status(200).json(resultado)

    }
    async atualizar(req, res) {
        const id = req.params.consultasId;
        const _id = String((await consultasModel.findOne({'id' : id}))._id);
        let consultas = req.body;
        await consultasModel.findByIdAndUpdate(String(_id), consultas);
        res.status(200).send();
    }

    async excluir(req, res) {
        const id = req.params.consultasId;
        const _id = String((await consultasModel.findOne({'id' : id}))._id);
        await consultasModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }

}

module.exports = new consultasController();