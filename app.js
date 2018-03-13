var express = require('express');
var app = express();
var index = require('./routes/index');
var account = require('./routes/account')

//Routes to use
app.use('/', index);
// app.use('/mocks', mocks);
app.use('/account', account);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render(err.message);
});


module.exports = app;
