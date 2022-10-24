const express = require('express');
const router = express.Router();
const clientesController = require('../controller/clientesController');

router.get('/login', clientesController.login);
router.post('/login', clientesController.autenticar);
router.get('/criarconta', clientesController.create);
router.post('/', clientesController.store);
router.get('/logout', clientesController.logout);

module.exports = router;