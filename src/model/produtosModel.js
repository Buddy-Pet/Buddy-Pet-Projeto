let produtos = require('../data/produtosData')

module.exports = {
	findAll(){
		return produtos;
	}

	findById(id){
		// Filter sempre retorna um array
		return produtos.filter(produto => produto.id == id)
	}

	findByCategory(categoria){
		// Filter sempre retorna um array
		return produtos.filter(produto => produto.categoria == categoria)
	}

	store(data){
		const produto = {
			...data,
			id: produtos.length + 1
		}

		produtos.push(produto);

		return produtos;
	}

	update(id, data){
		// Busca sempre a primeira ocorrência e caso não encontre, retorna null
		const produto = produto.find(produto => produto.id == id);

		if(produto){
			return "Produto não encontrado";
		}

		produto.id = produto.length + 1
		produto.nome = data.nome;
		produto.preco = data.preco;
		produto.descricao = data.descricao;
		produto.categoria = data.categoria

		return produtos;
	}

	destroy(id){
		produtos = produtos.filter(produto => produto.id != id)

		return produtos;
	}
}


/*const dados ={
	title: "Produtos"
}

module.exports = dados*/