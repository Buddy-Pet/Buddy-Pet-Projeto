const dados = require("../models/outrosModel")

const outrosController = {
	outros: function(req, res, next) {
		res.render('outros', { title: dados.title });
	}
}


module.exports = outrosController