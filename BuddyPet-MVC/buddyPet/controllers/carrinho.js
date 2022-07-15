const dados = require("../models/carrinhoModel")

const carrinhoController = {
	index: function(req, res, next) {
		res.render('carrinho', { title: dados.title });
	}
}


module.exports = carrinhoController