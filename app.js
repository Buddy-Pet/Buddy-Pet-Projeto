const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const homeRouter = require('./src/routes/home');
const cachorrosRouter = require('./src/routes/cachorros');
const gatosRouter = require('./src/routes/gatos');
const avesRouter = require('./src/routes/aves');
const outrosRouter = require('./src/routes/outros');
const politicasRouter = require('./src/routes/politicas');
const promocoesRouter = require('./src/routes/promocoes');
const criarContaRouter = require('./src/routes/criarConta');
const quemSomosRouter = require('./src/routes/quemSomos');
const carrinhoRouter = require('./src/routes/carrinho');
const acessarRouter = require('./src/routes/acessar');
const produtosRouter = require('./src/routes/produtos');

const app = express();

// view engine setup
app.set('views', path.join(__dirname,'src','views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', homeRouter)
app.use('/cachorros', cachorrosRouter);
app.use('/gatos', gatosRouter);
app.use('/aves', avesRouter);
app.use('/outros', outrosRouter);
app.use('/politicas', politicasRouter);
app.use('/promocoes', promocoesRouter);
app.use('/criarConta', criarContaRouter);
app.use('/quemsomos', quemSomosRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/acessar', acessarRouter);

// CRUD
app.use('/produtos', produtosRouter);

// catch 404 and forward to error handler
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
