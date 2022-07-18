var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var cachorrosRouter = require('./routes/cachorros');
var gatosRouter = require('./routes/gatos');
var avesRouter = require('./routes/aves');
var outrosRouter = require('./routes/outros');
var politicasRouter = require('./routes/politicas');
var produtosRouter = require('./routes/produtos');
var promocoesRouter = require('./routes/promocoes');
var criarContaRouter = require('./routes/criarConta');
var quemsomosRouter = require('./routes/quemsomos');
var carrinhoRouter = require('./routes/carrinho');
var acessarRouter = require('./routes/acessar');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)
app.use('/cachorros', cachorrosRouter);
app.use('/gatos', gatosRouter);
app.use('/aves', avesRouter);
app.use('/outros', outrosRouter);
app.use('/politicas', politicasRouter);
app.use('/produtos', produtosRouter);
app.use('/promocoes', promocoesRouter);
app.use('/criarConta', criarContaRouter);
app.use('/quemsomos', quemsomosRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/acessar', acessarRouter);

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
