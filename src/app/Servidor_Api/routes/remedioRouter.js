const express = require('express');
const router = express.Router();
const remedioController = require('../controllers/remedioController');

/* GET lista de remedios */
router.get('/', remedioController.listar);

/* POST salvar de remedios */
router.post('/', remedioController.salvar);

/* GET buscar de remedios */
router.get('/:remedioId', remedioController.buscarPorId);

/* PUT atualizar de remedios */
router.put('/:remedioId', remedioController.atualizar);

/* DELETE o remedio */
router.delete('/:remedioId', remedioController.excluir);


module.exports = router;
