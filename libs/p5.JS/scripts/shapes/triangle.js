/**
 * triangle(x1, y1, x2, y2, x3, y3)
 * x1 x-coordinate of the first point
 * y1 y-coordinate of the first point
 * x2 x-coordinate of the second point
 * y2 y-coordinate of the second point
 * x3 x-coordinate of the third point
 * y3 y-coordinate of the third point
*/

SCREEN_HEIGHT = 500;
SCREEN_WIDTH = 500;

function setup() {
    createCanvas(SCREEN_WIDTH, SCREEN_WIDTH);
  
    background(0);
    
    triangle(30, 75, 58, 20, 86, 75);
}