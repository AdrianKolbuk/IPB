var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//sequelize
const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
  .catch(err => {
    console.log(err);
  });

//api routes
const działProjektowyApiRouter = require('./routes/api/DziałProjektowyApiRoute');
const projektantApiRouter = require('./routes/api/ProjektantApiRoute');
const zlecenieApiRouter = require('./routes/api/ZlecenieApiRoute');
const dokumentacjaApiRouter = require('./routes/api/DokumentacjaApiRoute');
const kolekcjaGrafikApiRouter = require('./routes/api/KolekcjaGrafikApiRoute');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api/działProjektowy', działProjektowyApiRouter);
app.use('/api/projektant', projektantApiRouter);
app.use('/api/zlecenie', zlecenieApiRouter);
app.use('/api/dokumentacja', dokumentacjaApiRouter);
app.use('/api/kolekcjaGrafik', kolekcjaGrafikApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
