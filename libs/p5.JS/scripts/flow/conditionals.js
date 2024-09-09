function setup() {
    createCanvas(600, 400);
    background(0);
    diameter = 70;
    moveX = 0;
    moveY = 0;
    deltaX = 2;
    deltaY = 2;
}

// double buffered animation
// only updates when full frame ready at the end
function draw() {
    background(0);
    strokeWeight(1);
    stroke('white');
    fill('pink');

    circle(diameter/2 + moveX, height/2, diameter);
    moveX += deltaX;
    if (moveX >= width-diameter || moveX <= 0) {
        deltaX *= -1;
    }

    circle(width/2, moveY+diameter/2, diameter);
    moveY += deltaY;
    if (moveY >= height-diameter || moveY <= 0) {
        deltaY *= -1;
    }
    frameRate(20);
}
