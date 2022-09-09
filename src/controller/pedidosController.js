const { Pedido } = require('../models');

module.exports = {
    async list (req, res) {
        const pedidos = await Pedido.findAll();

        res.render('categorias', {pedidos})
    }
}