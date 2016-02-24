/* Jeffrey Zou
*  SoftDev2 pd3
*  HW2 -- Dot, Dot, Dot
*  2016-02-11
*/

//Keeps track of the previous point
var previousX = -1;
var previousY = -1;
//Sets up the canvas
var canvas = document.getElementById('playground');
var context = canvas.getContext('2d');
context.fillStyle = '#18F3FF';
context.strokeStyle = '#FF2418';
context.strokeRect(0,0,canvas.width,canvas.height);

/* Working on the canvas */

//This is the outer function - is called whenever mouse is clicked
var makeDot = function makeDot(event) {
  //Gets x and y coordinates when the mouse is clicked and draws a circle at those coordinates
  mouseX = event.offsetX;
  mouseY = event.offsetY;
  context.beginPath();
  context.arc(mouseX, mouseY, 10, 0, 2*Math.PI);
  context.fill();
  //Makes lines
  makeLine(previousX, previousY, mouseX, mouseY);
  previousX = mouseX;
  previousY = mouseY;
};

//This function makes lines
var makeLine = function makeLine(x, y, mx, my) {
  if (previousX != -1 && previousY != -1) {
    context.beginPath();
    context.moveTo(x, y)
    context.lineTo(mx, my);
    context.stroke();
  }
};

//Clears the canvas and redraws it
var clear = function clear(event) {
  event.preventDefault();
  context.clearRect(0,0,canvas.width,canvas.height);
  context.strokeRect(0,0,canvas.width,canvas.height);
  previousX = -1;
  previousY = -1;
};

/* Event Listeners */

//Event listener is in charge of making the dot whenever mouse is clicked
var canvas = document.getElementById('playground');
playground.addEventListener('click', makeDot);

var button = document.getElementById('clear');
button.addEventListener('click', clear);
