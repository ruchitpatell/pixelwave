/**
 * rect(x, y, w, [h], [tl], [tr], [br], [bl],x, y, w, h, [detailX], [detailY])
 * x: x-coordinate of the rectangle
 * y: y-coordinate of the rectangle
 * w: width of the rectangle
 * h: height of the rectanglel
 * l: optional radius of top-left corner
 * r: optional radius of top-right corner
 * r: optional radius of bottom-right corner
 * l: optional radius of bottom-left corner
 * detailX: number of segments in the x-direction (for WebGL mode).
 * detailY: number of segments in the y-direction (for WebGL mode).
 */

// rectMode for changing details

SCREEN_HEIGHT = 500;
SCREEN_WIDTH = 500;

function setup() {
    createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  
    background(0);
    
    // normal
    rect(30, 20, 165, 145);

    // all corners radius 20
    rect(30, 180, 165, 150, 20);

    // diff raidus
    rect(30, 340, 155, 150, 120, 115, 110, 15);
}
