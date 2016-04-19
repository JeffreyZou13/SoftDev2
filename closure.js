var base = 'this is in f1 in the global namespace';
var x = 'this is global';

var f2 = function() {
  console.log('this is f2');
};

var f1 = {
  x: 'in f1 ns',
  f2:f2,
  f: function() {
    console.log('this is in f in f1');
    console.log('x is ' + x);
    console.log('f1.x is ' + f1.x);
    console.log('better way: ' + this.x);
  }
};

var makeIncrementer = function(x=0) {
  return function() {
    return ++x;
  }
};

var makeAdder = function(n) {
  return function(x) {
    return x + n;
  }
};
