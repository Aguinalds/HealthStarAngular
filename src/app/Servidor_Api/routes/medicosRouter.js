const express = require('express');
const router = express.Router();
const medicosController = require('../controllers/medicosController');

/* GET lista de remedios */
router.get('/', medicosController.listar);

/* POST salvar de remedios */
router.post('/', medicosController.salvar);

/* GET buscar de remedios */
router.get('/:medicosId', medicosController.buscarPorId);

/* PUT atualizar de remedios */
router.put('/:medicosId', medicosController.atualizar);

/* DELETE o remedio */
router.delete('/:medicosId', medicosController.excluir);

module.exports = router;