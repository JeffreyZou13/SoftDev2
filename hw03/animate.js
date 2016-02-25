/* Jeffrey Zou
*  SoftDev2 pd3
*  HW03 -- Are We Ever Going to Start the Movie?
*  2016-02-25
*/

//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById( "circle" );
var dvdButton = document.getElementById( "dvd" );
var stopButton = document.getElementById( "stop" );

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to red
ctx.fillStyle = "#ff0000";


var requestID;

var clear = function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, 500, 500);
};

var radius = 0;
var growing = true;


var drawDot = function() {

    ctx.clearRect( 0, 0, c.width, c.height );

    if ( growing ) {
	radius = radius + 1;
    }
    else {
	radius = radius - 1;
    }

    if ( radius == (c.width / 2) )
	growing = false;
    else if ( radius == 0 ) {
	growing = true;
    }

    ctx.beginPath();
    ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI );
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame( drawDot );
};



var dvdLogoSetup = function() {

    //Q: What good might this do?
    //A: It will stop the previous animation.
    window.cancelAnimationFrame( requestID );

    //var inits
    var right, down = true;
    var w = 80;
    var h = 60;
    var x = Math.floor(Math.random() * (c.width - w));
    var y = c.height/2;
    var logo = new Image();
    logo.src = './dvd.jpg';

    //a function defined within a function, oh my!
    var dvdLogo = function() {
      //Draw stuff
      ctx.clearRect(0,0,c.width,c.height);
      ctx.drawImage(logo, x, y, w, h);
	    //propulsion mechanism
	    if (right) x+=1;
      else x-=1;
      if (down) y+=1;
      else y-=1;
      //Checking for walls
      if (x > c.width - w || x < 0) right = !right;
      if (y > c.height - h || y < 0) down = !down;

	    //Q: Why this here?
      //A: This function is called over and over (sort of like recursion).
	    requestID = window.requestAnimationFrame( dvdLogo );
    };

    dvdLogo();
};


var stopIt = function() {
    console.log( requestID );
    window.cancelAnimationFrame( requestID );
};


dotButton.addEventListener( "click", drawDot );
dvdButton.addEventListener( "click", dvdLogoSetup );
stopButton.addEventListener( "click",  stopIt );
