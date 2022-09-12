const { PedidosProdutos } = require('../models');

module.exports = {
    async list (req, res) {
        const pedidosProdutos = await PedidosProdutos.findAll();

        res.render('pedidosProdutos', {pedidosProdutos})
    }
}