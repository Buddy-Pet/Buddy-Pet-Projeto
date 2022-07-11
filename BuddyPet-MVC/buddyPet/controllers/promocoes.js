const dados = require("../models/indexModel")

const indexController = {
	index: function(req, res, next) {
		res.render('index', { title: dados.title });
	}
}


module.exports = indexController