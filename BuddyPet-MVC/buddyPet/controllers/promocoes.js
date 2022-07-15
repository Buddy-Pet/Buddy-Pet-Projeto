const dados = require("../models/promocoesModel")

const promocoesController = {
	index: function(req, res, next) {
		res.render('promocoes', { title: dados.title });
	}
}


module.exports = promocoesController