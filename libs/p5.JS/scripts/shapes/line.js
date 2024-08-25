/**
 * Parameters
 * x1: the x-coordinate of the first point.
 * y1: the y-coordinate of the first point.
 * x2: the x-coordinate of the second point.
 * y2: the y-coordinate of the second point.
 * z1: the z-coordinate of the first point.
 * z2: the z-coordinate of the second point.
 */

SCREEN_HEIGHT = 500;
SCREEN_WIDTH = 500;

function setup() {
    createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  
    background(0);
  
    // tl to br diagonal
    stroke(255, 255);
    line(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    line(100, SCREEN_HEIGHT/2, SCREEN_WIDTH-100, SCREEN_HEIGHT/2)
}
