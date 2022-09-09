const { TipoProduto } = require('../models');

module.exports = {
    async list (req, res) {
        const tipoProdutos = await TipoProduto.findAll();

        res.render('tipoProdutos', {tipoProdutos})
    }
}