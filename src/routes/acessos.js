var express = require('express');
var router = express.Router();
const { Produtos } = require("../models");

router.get('/', async function(req, res, next) {
    const produtos = await Produtos.findAll();
    const maisVendidos = produtos.slice(0,5);
    const ofertas = produtos.filter(produto => produto.preco <= 60).slice(0,5);

    res.render('home', { title: "Home", maisVendidos, ofertas });

});

module.exports = router;