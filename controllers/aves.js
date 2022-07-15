const dados = require("../models/avesModel")

const avesController = {
	aves: function(req, res, next) {
		res.render('aves', { title: dados.title });
	}
}


module.exports = avesController