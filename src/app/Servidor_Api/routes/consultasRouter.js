var express = require('express');
var router = express.Router();
const consultasController = require('../controllers/consultasController');

/* GET lista de consultass */
router.get('/', consultasController.listar);

/* POST salvar de consultass */
router.post('/', consultasController.salvar);

/* GET buscar de consultass */
router.get('/:consultasId', consultasController.buscarPorId);

/* PUT atualizar de consultass */
router.put('/:consultasId', consultasController.atualizar);

/* DELETE o consultas */
router.delete('/:consultasId', consultasController.excluir);


module.exports = router;
