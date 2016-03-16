var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var hubSpotLists = require('./controllers/hubSpotList');

var mongoose = require('mongoose');
// process.env.MONGOLAB_URI is Heroku variable.
var mongConnect = mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/hubSpotLists');

// Seed the database:
// require('./models/seedDb/seedDb.js');

var app = express();  

// view engine setup
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'app/public', 'favicon.ico')));
app.use('/bower_components',  express.static(__dirname + '/app/bower_components'));
app.use('/public',  express.static(__dirname + '/app/public'));

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// DEFINING ROUTES
var routes = require('./app/routes/index');
var users = require('./app/routes/users');
// var api = require('./app/routes/api');

app.use('/', routes);
app.use('/users', users);
// app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


var port = process.env.PORT || 6403;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + server.address().port);
});
// module.exports = app;
