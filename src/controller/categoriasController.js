const { categorias } = require('../models');

module.exports = {
    async list (req, res) {
        const categorias = await categorias.findAll();

        res.render('')
    }
}