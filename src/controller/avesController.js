const dados = require("../model/produtosModel")

const avesController = {
	aves: function(req, res, next) {
		res.render('aves', { title: "aves", produtos:dados.findByCategory("aves") });
	}
}


module.exports = avesController