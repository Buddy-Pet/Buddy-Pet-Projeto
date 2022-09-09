const createError = require('http-errors');
const express = require('express');
const methodOverride = require('method-override')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const homeRouter = require('./src/routes/home');
const politicasRouter = require('./src/routes/politicas');
const criarContaRouter = require('./src/routes/criarConta');
const quemSomosRouter = require('./src/routes/quemSomos');
const carrinhoRouter = require('./src/routes/carrinho');
const acessarRouter = require('./src/routes/acessar');
const produtosRouter = require('./src/routes/produtos');
const loginRouter = require('./src/routes/login');
const categoriasRouter = require('./src/routes/categoriasRoutes');
const tipoProdutosRouter = require('./src/routes/tipoProdutosRoutes');
const pedidosRouter = require('./src/routes/pedidosRoutes');
const clientesRouter = require('./src/routes/clientesRoutes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname,'src','views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', homeRouter);
app.use('/politicas', politicasRouter);
app.use('/criarConta', criarContaRouter);
app.use('/quemsomos', quemSomosRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/acessar', acessarRouter);
app.use('/login', loginRouter);
app.use('/categorias', categoriasRouter);
app.use('/tipoProdutos', tipoProdutosRouter);
app.use('/clientes', clientesRouter);


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
