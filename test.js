var test = require('tape');
var logic = require('./logic');

var newTask = {
  'id': 1,
  'description': 'eat hotdog',
  'done': false
};

// var addTodo = logic.addTodo;

test('Example test', function(t) {
  var actual = {'id':1, 'description':'eat hotdog', 'done': false};
  var expected = logic.addTodo([], newTask);
  //t.pass();
  t.deepEqual(actual, expected, 'this test should pass');
  t.end();
});
