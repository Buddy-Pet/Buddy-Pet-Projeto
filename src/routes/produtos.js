const express = require('express');
const produtosController = require('../controller/produtosController');
const path = require('path');
const router = express.Router();
const multer = require('multer');

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
router.get('/criar', produtosController.create);
router.post('/criar', upload.single('imagem'), produtosController.store);

/*** EDIT ONE PRODUCT ***/
router.get('/editar/:id', produtosController.edit);
router.put('/editar/:id', upload.single('imagem'), produtosController.update);

router.get('/detalhesProduto/:id', produtosController.show);

router.get('/', produtosController.index);

router.delete('/:id', produtosController.delete);

module.exports = router;