const dados = require("../model/homeModel");
const produtosModel = require("../model/produtosModel")

const homeController = {
	home: function(req, res, next) {
		const produtos = produtosModel.findAll();
		const maisVendidos = produtos.slice(0,5);
		const ofertas = produtos.filter(produto => produto.preco <= 60).slice(0,5)

		res.render('home', { title: dados.title, maisVendidos, ofertas });
	}
}


module.exports = homeController