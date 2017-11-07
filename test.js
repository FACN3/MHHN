var test = require('tape');
var todoFunctions = require('./logic');

var newTask = {
  'id': 1,
  'description': 'hello',
  'done': false
};

// var addTodo = logic.addTodo;

test('Example test', function(t) {
  var actual = [{'id':1, 'description': 'hello', 'done': false}];
  var expected = todoFunctions.addTodo([], newTask);
  //t.pass();
  t.deepEqual(actual, expected, 'this test should pass');
  t.end();
});
