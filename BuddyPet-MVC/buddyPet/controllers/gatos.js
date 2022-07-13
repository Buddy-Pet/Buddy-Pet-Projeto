const dados = require("../models/gatosModel")

const gatosController = {
	index: function(req, res, next) {
		res.render('gatos', { title: dados.title });
	}
}


module.exports = gatosController