let manipularDados = require('../helper/manipularDados')

module.exports = {
	findAll(){
		return manipularDados.lerDados('../data/produtosData.json');
	},

	findById(id){
		const produtos = this.findAll();

		return produtos.find(produto => produto.id == id)
	},

	findByCategory(categoria){
		const produtos = this.findAll();

		return produtos.filter(produto => produto.categoria == categoria)
	},

	store(data){
		const produtos = this.findAll();
		
		const produto = {
			...data,
			id: produtos.at(-1).id + 1
		}

		produtos.push(produto);
		
		manipularDados.gravarDados('../data/produtosData.json', produtos);

		return produtos;
	},

	update(id, data){
		const produtos = this.findAll();

		const produto = produtos.find(produto => produto.id == id);

		if (!produto) {
			return "Produto não encontrado";
		}

		produto.nome = data.nome;
		produto.preco = data.preco;
		produto.descricao = data.descricao;
		produto.categoria = data.categoria;
		produto.tipoProduto = data.tipoProduto

		manipularDados.gravarDados('../data/produtosData.json', produtos);

		return produto;
	},

	delete(id){
		let produtos = this.findAll();

		produtos = produtos.filter(produto => produto.id != id)

		manipularDados.gravarDados('../data/produtosData.json', produtos);

		return produtos;
	}
}

