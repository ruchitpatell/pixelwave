/**
 * arc / arc(x, y, w, h, start, stop, [mode], [detail])
 * x x-coordinate of the arc's ellipse
 * y y-coordinate of the arc's ellipse
 * w width of the arc's ellipse by default
 * h height of the arc's ellipse by default
 * start angle to start the arc, specified in radians
 * stop angle to stop the arc, specified in radians
 * mode optional parameter to determine the way of drawing the arc either CHORD, PIE, or OPEN
 * detail optional parameter for WebGL mode only This is to specify the number of vertices that makes up the perimeter of the arc Default value is 25 Won't draw a stroke for a detail of more than 50
 */

SCREEN_HEIGHT = 500;
SCREEN_WIDTH = 500;

function setup() {
    createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  
    background(0);
    stroke(255, 255, 0);
    strokeWeight(10);

    /**
    *                π/2 (90)
    *     2π/3 (120)  |      π/3 (60)
    *           \     |     /
    *            \    |    /
    *             \   |   /
    *              \  |  /
    *   π (180)  —— —— —— —— 0 or 2π (0 or 360) 
    *           /     |     \
    *          /      |      \
    *         /       |       \
    *        /        |        \
    *  4π/3 (240)     |      5π/3 (300)
    *                 |
    *                3π/2 (270)
    * 
    *  5π/6 (150)      π/6 (30)
    *  7π/6 (210)     11π/6 (330)
    */

    
    // upper half circle
    arc(60, 60, 100, 100, PI, 2*PI);

    // lower half circle
    arc(60, 65, 100, 100, 2*PI, PI);

    // pacman
    arc (60, 200, 100, 100, PI/6, 11*PI/6)

    // fill modes

    // default
    arc(200, 60, 100, 100, 0, PI + QUARTER_PI);
    // open
    arc(200, 160, 100, 100, 0, PI + QUARTER_PI, OPEN);
    // chord
    arc(200, 260, 100, 100, 0, PI + QUARTER_PI, CHORD);
    // pie
    arc(200, 360, 100, 100, 0, PI + QUARTER_PI, PIE);
}
