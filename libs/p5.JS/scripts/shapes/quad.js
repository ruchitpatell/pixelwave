/**
 * quad(x1, y1, x2, y2, x3, y3, x4, y4, [detailX], [detailY],x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4, [detailX], [detailY])
 * x1: the x-coordinate of the first point
 * y1: the y-coordinate of the first point
 * x2: the x-coordinate of the second point
 * y2: the y-coordinate of the second point
 * x3: the x-coordinate of the third point
 * y3: the y-coordinate of the third point
 * x4: the x-coordinate of the fourth point
 * y4: the y-coordinate of the fourth point
 * detail and z coords not included
 */

SCREEN_HEIGHT = 500;
SCREEN_WIDTH = 500;

function setup() {
    createCanvas(SCREEN_WIDTH, SCREEN_WIDTH);
  
    background(0);
  
    quad(15, 161, 186, 15, 150, 138, 14, 50);
}