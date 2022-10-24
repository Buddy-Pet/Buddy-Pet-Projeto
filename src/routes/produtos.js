const express = require('express');
const produtosController = require('../controller/produtosController');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const authMiddleware = require('../../middleware/auth');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folder = path.join(__dirname, '../../public/img');
    callback(null, folder)
  },
  filename: (req, file, callback) => {
    const imageName = Date.now() + file.originalname;
    callback(null, imageName)
  },
});

const upload = multer({ storage });

/*** CREATE ONE PRODUCT ***/
router.get('/criar', authMiddleware, produtosController.create);
router.post('/criar', authMiddleware, upload.single('imagem'), produtosController.store);

/*** EDIT ONE PRODUCT ***/
router.get('/editar/:id', authMiddleware, produtosController.edit);
router.put('/editar/:id', authMiddleware, upload.single('imagem'), produtosController.update);

router.get('/detalhesProduto/:id', produtosController.show);

router.get('/categories/:category/:tipoProduto?', produtosController.index);

router.delete('/:id', authMiddleware, produtosController.destroy);

module.exports = router;