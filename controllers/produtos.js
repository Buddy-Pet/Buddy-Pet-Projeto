const dados = require("../models/produtosModel")

const produtosController = {
	produtos: function(req, res, next) {
		res.render('produtos', { title: dados.title });
	}
}


module.exports = produtosController