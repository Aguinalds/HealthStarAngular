const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/', loginController.listar);
router.get('/:Id', loginController.buscarPorId);
router.post('/login', loginController.login);
router.post('/', loginController.salvar);
router.put('/:Id', loginController.atualizar);
router.delete('/:Id', loginController.excluir);


module.exports = router;
