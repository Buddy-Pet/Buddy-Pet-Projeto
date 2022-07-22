const dados = require("../model/carrinhoModel")

const carrinhoController = {
	carrinho: function(req, res, next) {
		res.render('carrinho', { title: dados.title });
	}
}


module.exports = carrinhoController