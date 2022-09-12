const { Pedidos } = require('../models');

module.exports = {
    async list (req, res) {
        const pedidos = await Pedidos.findAll();

        res.render('pedidos', {pedidos})
    }
}