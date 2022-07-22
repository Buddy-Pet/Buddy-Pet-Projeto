const dados = require("../model/cachorrosModel")

const cachorrosController = {
	cachorros: function(req, res, next) {
		res.render('cachorros', { title: dados.title });
	}
}


module.exports = cachorrosController