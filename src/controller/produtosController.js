const { lerDados } = require("../helper/manipularDados");
const produtosModel = require("../model/produtosModel")

module.exports = {
	index(req, res){
		const { category } = req.query;

		let produtos;

		if(category){
			produtos = produtosModel.findByCategory(category);
		} else {
			produtos = produtosModel.findAll();
		}
		
		res.send(produtos);
	},

	show(req, res){
		const { id } = req.params;
		const produto = produtosModel.findById(id);

		res.send(produto);
	},

	store(req, res){
		const { nome, preco, descricao, categoria } = req.body;

		const produtos = produtosModel.store({ nome, preco, descricao, categoria })

		res.send(produtos);
	},

	update(req, res){
		const { id } = req.params;
		const { nome, preco, descricao, categoria } = req.body;

		const produtoAtualizado = produtosModel.update(id, { nome, preco, descricao, categoria })
		
		res.send(produtoAtualizado);
	},

	delete(req, res){
		const { id } = req.params;
		const produtosAtualizado = produtosModel.delete(id);

		res.send(produtosAtualizado);
	},

	cachorros: function(req, res, next){
		res.render('produtos', {title: 'Cachorros', description: "", produtos: produtosModel.findByCategory('cachorros') });
	},
	gatos: function(req, res, next){
		res.render('produtos', {title: 'Gatos', description: "", produtos: produtosModel.findByCategory('gatos')});
	},
	aves: function(req, res, next){
		res.render('produtos', {title: 'Aves', description: "", produtos:produtosModel.findByCategory('Aves')});
	},
	outros: function(req, res, next){
		res.render('produtos', {title: 'Outros', description: "", produtos:produtosModel.findByCategory('outros')});
	}
}


