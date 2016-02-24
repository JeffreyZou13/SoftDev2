/* Jeffrey Zou
*  SoftDev2 pd3
*  HW1b -- Finding Your Path Around the Canvas
*  2016-02-10
*/

/* This sets up the context and draws two simple rectangles */

//This selects the canvas with id ftb2maga
ftb2maga = document.getElementById('ftb2maga');
//We use the context to draw pretty pictures
context = ftb2maga.getContext('2d');

//Sets the color used in 'fill'
context.fillStyle = '#009900';
//Draws a rectangle filled with the color set previously
context.fillRect(0,0,100,100);
//Sets a second color
context.fillStyle = '#990099';
//Draws second filled rectangle
context.fillRect(100,100,100,100);
//Sets the color used in 'stroke'
context.strokeStyle = '#FF66FF';
//Draws an unfilled rectangle
context.strokeRect(0,0,200,200);

/* Here begins the line drawing stuff */

//Signals the start of a new path
context.beginPath();
context.strokeStyle = '#00FF00';
//Moves the start of the path to a coordinate
context.moveTo(250, 100);
//Draws a line to the specified coordinate
context.lineTo(528, 200);
//More lines
context.lineTo(250, 300);
context.lineTo(538, 400);
//Draws the paths
context.stroke();
//Ends the path
context.closePath();

/* Arc */
//This draws an arc o:
context.beginPath();
//This draws an arc using paramters: centerx, centery, startangle, endangle, counterclockwise (boolean).
context.arc(200,200,50,Math.PI,3*Math.PI/2, true);
//Actually draws the arc
context.stroke();
//Ends the path
context.closePath();

/* Texts! */
context.font = '30px Symbol';
var text = 'I am text!';
context.fillText(text, 250, 30);
