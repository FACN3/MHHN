var test = require('tape');
var logic = require('./logic');

var newTodo=[{
  "id":"",
  "description":"hello",
  "done":false
},{
  "id":"",
  "description":"hello",
  "done":false
}];


test('Test for addTodo', function(t) {

  var actual = logic.addTodo([],newTodo[0]);
  var expected = [{"id":1,"description":"hello","done":false}];
  t.deepEqual(actual,expected, "new todo created");
  t.end();
});

test('Test for deleteTodo', function(t) {

  var actual = logic.deleteTodo([{"id":1,"description":"hello","done":false},{"id":2,"description":"hello","done":false}],1);
  var expected = [{"id":2,"description":"hello","done":false}];
  t.deepEqual(actual,expected, "todo deleted successfully");
  t.end();
});


test('Test for markTodo', function(t) {

  var actual = logic.markTodo([{"id":1,"description":"hello","done":false},{"id":2,"description":"hello","done":false}],1);
  var expected = [{"id":1,"description":"hello","done":true},{"id":2,"description":"hello","done":false}];
  t.deepEqual(actual,expected, "todo marked successfully");

  t.end();
});
