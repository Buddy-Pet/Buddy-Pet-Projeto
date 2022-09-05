const { TipoProduto } = require('../models');

module.exports = {
    async list (req, res) {
        const TipoProdutos = await TipoProduto.findAll();

        res.render('TipoProdutos', {TipoProdutos})
    }
}