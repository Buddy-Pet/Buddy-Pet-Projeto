const { Produtos } = require('../models');

module.exports = {
    async list (req, res) {
        const produto = await Produtos.findAll();

        res.render('produto', {produto})
    }
}