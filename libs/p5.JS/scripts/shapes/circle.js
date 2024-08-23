/**
 * Parameters
 * x: x-coordinate of the center of the circle.
 * 
 * y: y-coordinate of the center of the circle.
 * 
 * d: diameter of the circle.
 */

SCREEN_HEIGHT = 500;
SCREEN_WIDTH = 500;

function setup() {
    createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  
    background(0);
  
    circle(250, 250, 250);
  
    describe('A white circle with black outline in the middle of a gray canvas.');
}
