//Setting up attribute stuff
var pic = document.getElementById('vimage');

var change = function(event) {
  event.preventDefault();
  this.setAttribute('fill', 'green');
};

var drawDot = function(x,y) {
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute('cx', x);
  c.setAttribute('cy', y);
  c.setAttribute('r', '30');
  c.setAttribute('fill', 'yellow');
  c.setAttribute('stroke', 'black');
  c.addEventListener('click', change);
  pic.appendChild(c);
};

//INTERACTIVITY
var clicked = function(event) {
  if (event.toElement == this) drawDot(event.offsetX, event.offsetY);
};

pic.addEventListener('click', clicked);
