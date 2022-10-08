const politicasController = {
	politicas: function(req, res, next) {
		res.render('politicas', { title: "politicas" });
	}
}


module.exports = politicasController