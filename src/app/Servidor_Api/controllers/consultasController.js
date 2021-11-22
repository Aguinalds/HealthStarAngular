const consultaModel = require('../models/medicosModel');

class MedicoController {


    async salvar(req, res) {
        const max = await medicosModel.findOne({}).sort({id: -1});
        let medicos = req.body;
        medicos.id = max == null ? 1 :  max.id + 1;
        const resultado = await medicosModel.create(medicos);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await medicosModel.find({});
        res.status(200).json(resultado);

    }
    
    async buscarPorId(req, res) {
        const id = req.params.medicosId;
        const resultado = await medicosModel.findOne({'id': id});
        res.status(200).json(resultado)

    }
    async atualizar(req, res) {
        const id = req.params.medicosId;
        const _id = String((await medicosModel.findOne({'id' : id}))._id);
        let medicos = req.body;
        await medicosModel.findByIdAndUpdate(String(_id), medicos);
        res.status(200).send();
    }

    async excluir(req, res) {
        const id = req.params.medicosId;
        const _id = String((await medicosModel.findOne({'id' : id}))._id);
        await medicosModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }

}

module.exports = new MedicoController();