require('./database/mongodb');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var indexRouter = require('./routes/indexRouter');
var remedioRouter = require('./routes/remedioRouter');
var medicosRouter = require('./routes/medicosRouter');
var consultasRouter = require('./routes/consultasRouter');
var loginRouter = require('./routes/loginRouter');
var usuarioRouter = require('./routes/usuarioRouter');

var app = express();

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/remedios', remedioRouter);
app.use('/medicos', medicosRouter);
app.use('/consultas', consultasRouter);
app.use('/auth', loginRouter );
app.use('/usuarios', usuarioRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Recursos de upload.
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, arquivo, callback) {
    callback(null, 'public/fotos/');
  },
  filename: function (req, arquivo, callback) {
    callback(null, arquivo.originalname);
  }
})
const upload = multer({ storage: storage });

app.post("/upload", upload.single('arquivo'), (req, res) => {
  res.status(200).send();
})


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
