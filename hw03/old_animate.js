/* Jeffrey Zou
*  SoftDev2 pd3
*  HW03 -- Are We Ever Going to Start the Movie?
*  2016-02-24
*/

console.log("hi mom");

//Usual setup for canvas
canvas = document.getElementById('box');
context = canvas.getContext('2d');

//Setting the colors
context.lineWidth = '5';
context.fillStyle = '#FFB6C1';
context.strokeStyle = '#0000FF';
context.strokeRect(0,0,canvas.width,canvas.height);
context.strokeStyle = '#90EE90';

//Growing, growing, growing
var radius = 0;
var grow = false;
var requestId;
var embiggen = function embiggen(event) {
  context.clearRect(0,0,canvas.width,canvas.height);

  if (radius == 0) grow = true;
  if (radius >= canvas.width/2) grow = false;

  if (grow) radius += 1;
  else radius -= 1;

  //I like circles
  context.beginPath();
  context.arc(canvas.width/2, canvas.height/2, radius, 0, 2*Math.PI);
  context.stroke();
  context.fill();
  //Magic
  requestId = window.requestAnimationFrame(embiggen);
};

//Good ol' DVD screensaver
var right, down = true;
var w = 80;
var h = 60;
var x = Math.floor(Math.random() * (canvas.width - w));
var y = canvas.height/2;
var logo = new Image();
logo.src = './dvd.jpg';

var moveDVD = function moveDVD(event) {
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(logo, x, y, w, h);
  if (x > canvas.width - w || x < 0) right = !right;
  if (y > canvas.height - h || y < 0) down = !down;

  if (right) x += 1;
  else x -= 1;
  if (down) y += 1;
  else y -= 1;

  requestId = window.requestAnimationFrame(moveDVD);
};

//Stop animation
var stopIt = function stopIt(event) {
  event.preventDefault();
  window.cancelAnimationFrame(requestId);
};


var circle = document.getElementById('circle');
circle.addEventListener('click', embiggen);

var stop = document.getElementById('stop');
stop.addEventListener('click', stopIt);

var dvd = document.getElementById('dvd');
dvd.addEventListener('click', moveDVD);
