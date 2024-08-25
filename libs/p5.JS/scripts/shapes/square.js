/**
 * square
 * 
 * x: x-coordinate of the square
 * y: y-coordinate of the square
 * s: side size of the square
 * tl: optional radius of top-left corner
 * tr: optional radius of top-right corner
 * br: optional radius of bottom-right corner
 * bl: optional radius of bottom-left corner
 */

SCREEN_HEIGHT = 500;
SCREEN_WIDTH = 500;

function setup() {
    createCanvas(SCREEN_WIDTH, SCREEN_WIDTH);
  
    background(0);
    
    // normal
    square(0, 0, 100);

    // all raidus
    square(0, 110, 100, 20);

    // manual rounding
    square(0, 220, 100, 20, 10, 5, 0);
}