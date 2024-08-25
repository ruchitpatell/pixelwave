
/* Parameters
 * x Number: x-coordinate of the center of the ellipse.
 * y Number: y-coordinate of the center of the ellipse.
 * w Number: width of the ellipse.
 * h Number: height of the ellipse.
 * detail Integer: optional parameter for WebGL mode only. This is to specify the number of vertices that makes up the perimeter of the ellipse. Default value is 25. Won't draw a stroke for a detail of more than 50.
*/

SCREEN_HEIGHT = 500;
SCREEN_WIDTH = 500;

function setup() {
    createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  
    background(0);
    
    ellipseMode(CENTER);
    ellipse(250, 250, 200, 100);

    ellipseMode(CORNER);
    fill(100);
    ellipse(250, 250, 200, 100);

    ellipseMode(RADIUS);
    fill(150);
    ellipse(250, 250, 50, 25);
}


/**
 * Attributes ellipseMode()
 *  Changes where ellipses, circles, and arcs are drawn. 
 *  ellipseMode(CENTER) use center x, y
 *  ellipseMode(CORNER) leftmost corner will be drawn at x, y
 *  ellipseMode(CORNERS) use bouding corner coord
 *  ellipseMode(RADIUS) use radius for w and h, drawn will be 2*w, 2*h
 *  The argument passed to ellipseMode() must be written in ALL CAPS because the constants CENTER, RADIUS, CORNER, and CORNERS are defined this way. JavaScript is a case-sensitive language.
 */