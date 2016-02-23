/* Jeffrey Zou
*  SoftDev2 pd3
*  HW02 -- Circular
*  2016-02-22
*/

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
var requestID;
var grow = false;
var embiggen = function embiggen() {
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
  requestID = window.requestAnimationFrame(embiggen);
};

//Stop the circle from growing/shrinking
var stop = function stop(event) {
    event.preventDefault();
    window.cancelAnimationFrame(requestID);
};

//Good ol' DVD
var x = canvas.width/2;
var y = canvas.height/2;
var w = 60;
var h = 40;

var moveDVD = function moveDVD() {
    context.clearRect(0,0, canvas.width, canvas.height);
    var logo = new Image();
    logo.src = './logo_dvd.jpg';
    context.drawImage(logo, x, y, w, h);

    
};

var circle = document.getElementById('circle');
circle.addEventListener('click', embiggen);

var stopIt = document.getElementById('stopIt');
stopIt.addEventListener('click', stop);

var dvd = document.getElementById('dvd');
dvd.addEventListener('click', moveDVD);
