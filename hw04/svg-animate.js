/* Jeffrey Zou
*  SoftDev2 pd3
*  HW04 - Using svg to make a circle grow and bounce a dvd logo
*  2016-03-03
*/

var pic = document.getElementById('vimage');

//Grow
var intervalID;
var radius;
var growing;

var drawDot = function() {
  //Removes all other images
  while (pic.firstChild) {
    pic.removeChild(pic.firstChild);
  }

  //Setting up and drawing the circle
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  var circle = document.getElementsByTagName('circle')[0];
  c.setAttribute('cx', 250);
  c.setAttribute('cy', 250);
  c.setAttribute('r', '30');
  c.setAttribute('fill', 'blue');
  c.setAttribute('stroke', 'black');
  radius = parseInt(c.getAttribute('r'));
  pic.appendChild(c);
  growing = true;

  //The function that has to be called over and over
  var grow = function() {
    console.log("in grow");

    if (growing) radius += 1;
    else radius -= 1;

    if (radius >= 250) growing = false;
    else if (radius <= 0) growing = true;

    c.setAttribute('r', radius);
  };

  //Interval
  intervalID = window.setInterval(grow, 16);
};

var dvdLogoSetup = function() {
  //Removes all other images
  while (pic.firstChild) {
    pic.removeChild(pic.firstChild);
  }

  var right = true;
  var down = true;
  var w = 80;
  var h = 60;
  var x = 250;
  var y = 250;
  var src = './dvd.jpg';
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

  c.setAttribute('width', w);
  c.setAttribute('height', h);
  c.setAttribute('x', x);
  c.setAttribute('y', y);
  c.setAttribute('style', 'fill:#0000FF');
  pic.appendChild(c);

  //Repeated function
  var dvdLogo = function() {
    if (right) x+=1;
    else x-=1;
    if (down) y+=1;
    else y-=1;

    if (x > 500 - w || x < 0) right = !right;
    if (y > 500 - h || y < 0) down = !down;

    c.setAttribute('x', x);
    c.setAttribute('y', y);
  };

  //Interval
  intervalID = window.setInterval(dvdLogo, 16);
};

//Stop
var stopIt = function(event) {
  event.preventDefault();
  window.clearInterval(intervalID);
}

var start = document.getElementById('start');
start.addEventListener('click', drawDot);

var stop = document.getElementById('stop');
stop.addEventListener('click', stopIt);

var dvd = document.getElementById('dvd');
dvd.addEventListener('click', dvdLogoSetup);
