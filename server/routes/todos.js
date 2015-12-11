var todos = [
  {
    id     : 'todo_1',
    title  : 'First todo',
    isDone : true
  },
  {
    id     : 'todo_2',
    title  : 'Second todo',
    isDone : false
  }
];


/*
 * GET todos listing.
 */
exports.findAll = function(req, res) {
  res.status(200).json(todos);
};

/*
 * GET todo by identifier.
 */
exports.findById = function(req, res) {
  var id = req.params.id;
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      res.status(200).json(todos[i]);
      return;
    }
  }
  res.status(404).json("Not found");

};

/*
 * Create a todo.
 */
exports.addTodo = function(req, res) {
  var todo = req.body;
  todo.id  = Math.random().toString(36).substring(2);
  todos.push(todo);
  res.status(200).json(todo);
};

/*
 * Update a todo by is identifier.
 */
exports.updateTodo = function(req, res) {
  var todo = req.body;
  var id   = todo.id;

  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i] = todo;
      res.status(200).json(todo);
      return;
    }
  }
  res.status(404).json("Not found");
};

/*
 * GET todos listing.
 */
exports.deleteTodo = function(req, res) {

  var id = req.params.id;

  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos.splice(i, 1);
      res.status(200).json();
      return;
    }
  }

  //res.json(304, "Not modified");
  res.status(404).json("Not found");
};