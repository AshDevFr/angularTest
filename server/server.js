/**
 * Module dependencies.
 */

var express    = require('express'),
    todos      = require('./routes/todos'),
    bodyParser = require('body-parser'),
    app        = express(),
    port       = process.env.SERVER_PORT || 9000;

// Configuration
app.set('port', port);
app.use(bodyParser());

app.get('/api/todos', todos.findAll);
app.get('/api/todos/:id', todos.findById);
app.post('/api/todos', todos.addTodo);
app.put('/api/todos/:id', todos.updateTodo);
app.delete('/api/todos/:id', todos.deleteTodo);


module.exports = app;

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});