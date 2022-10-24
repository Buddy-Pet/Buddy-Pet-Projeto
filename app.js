const createError = require('http-errors');
const express = require('express');
const methodOverride = require('method-override')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const politicasRouter = require('./src/routes/politicas');
const quemSomosRouter = require('./src/routes/quemSomos');
const carrinhoRouter = require('./src/routes/carrinho');
const acessosRouter = require('./src/routes/acessos');
const produtosRouter = require('./src/routes/produtos');
const categoriasRouter = require('./src/routes/categoriasRoutes');
const tipoProdutosRouter = require('./src/routes/tipoProdutosRoutes');
const pedidosRouter = require('./src/routes/pedidosRoutes');
const clientesRouter = require('./src/routes/clientes');
const pedidosProdutosRouter = require('./src/routes/pedidosProdutos');
const produtoRouter = require('./src/routes/produtoRoutes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname,'src','views'));
app.set('view engine', 'ejs');

app.use(session({
  secret:"projetoBuddyPetEcommerce",
  resave: true,
  saveUninitialized: true
}));

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', acessosRouter);
app.use('/politicas', politicasRouter);
app.use('/quemsomos', quemSomosRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/categorias', categoriasRouter);
app.use('/tipoProdutos', tipoProdutosRouter);
app.use('/clientes', clientesRouter);
app.use('/pedidosProdutos', pedidosProdutosRouter);
app.use('/pedidos', pedidosRouter);


// CRUD
app.use('/produtos', produtosRouter);

// catch 404 and forward to nerror handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
