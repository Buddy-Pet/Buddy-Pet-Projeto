const { Clientes } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
    
    async create(req, res) {
		res.render('criarConta', { title: "Criar Conta" });
	},

    async store(req, res) {
		const { nome, email, telefone, nascimento, cpf, senha } = req.body;
		const produto = await Clientes.create({ 
			nome, 
			email, 
			telefone, 
			data_nascimento: nascimento, 
			cpf,
            senha
		 });

		res.render('detalhesProduto', { title: 'Detalhes do Produto', produto });
	},

	login (req, res) {
		return res.render('login', { erros: null });
	  },
	
	autenticar (req, res) {
		const requestUser = req.body;
		const erros = [];
	
		if (!requestUser) {
		  erros.push({ msg: 'Login ou senha inválidos' });
		  return res.render('login', { erros });
		}
	
		const user = UserModel.buscar(requestUser);
	
		if (!user) {
		  erros.push({ msg: 'Login ou senha inválidos' });
		  return res.render('login', { erros });
		}
	
		const senhasIguais = bcrypt.compareSync(requestUser.senha, user.senha);
	
		if (!senhasIguais) {
		  erros.push({ msg: 'Login ou senha inválidos' });
		  return res.render('login', { erros });
		}
	
		req.session.usuario = user;
	
		return res.redirect('/servicos/admin');
	}
}