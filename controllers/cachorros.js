const dados = require("../models/cachorrosModel")

const cachorrosController = {
	index: function(req, res, next) {
		res.render('cachorros', { title: dados.title });
	}
}


module.exports = cachorrosController