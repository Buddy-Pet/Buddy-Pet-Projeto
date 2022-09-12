const { Categoria } = require('../models');

module.exports = {
    async list (req, res) {
        const categorias = await Categoria.findAll();

        res.render('categorias', {categorias})
    }
}