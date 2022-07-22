const produtosModel = require("../model/produtosModel")

module.exports = {
	index(req, res){
		const produtos = produtosModel.findAll();

		res.send(produtos);
	},

	store(req, res){
		const data = req.body;

		const produtos = produtosModel.store(data)

		res.send(produtos);
	}
}


/*const produtosController = {
	produtos: function(req, res, next) {
		res.render('produtos', { title: dados.title });
	}
}


module.exports = produtosController*/