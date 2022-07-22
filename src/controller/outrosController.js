const dados = require("../model/outrosModel")

const outrosController = {
	outros: function(req, res, next) {
		res.render('outros', { title: dados.title });
	}
}


module.exports = outrosController