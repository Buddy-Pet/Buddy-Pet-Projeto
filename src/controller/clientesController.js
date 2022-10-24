const { Clientes } = require('../models');
const bcrypt = require('bcrypt');

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
            senha: bcrypt.hashSync(senha, 12)
		 });

		res.redirect('/clientes/login');
	},

	login (req, res) {
		return res.render('login', { erros: null });
	  },
	
	async autenticar (req, res) {
		const requestUser = req.body;
		const erros = [];
	
		if (!requestUser) {
		  erros.push({ msg: 'Login ou senha inválidos' });
		  return res.render('login', { erros });
		}
	
		const user = await Clientes.findOne({where: {email: requestUser.email}});
	
		if (!user) {
		  erros.push({ msg: 'Login ou senha inválidos' });
		  return res.render('login', { erros });
		}
		console.log(requestUser);
		console.log(user);
		const senhasIguais = bcrypt.compareSync(requestUser.senha, user.senha);
	
		if (!senhasIguais) {
		  erros.push({ msg: 'Login ou senha inválidos' });
		  return res.render('login', { erros });
		}
		
		delete user.senha;
		req.session.usuario = user;
	
		return res.redirect('/');
	},
	logout: (req, res) => {
		if(req.session.usuario && req.session.usuario.email){
			delete req.session.usuario
		}
		res.redirect('/');
	}
}