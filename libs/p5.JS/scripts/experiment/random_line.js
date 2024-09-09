function setup() {
    createCanvas(600, 400);
    background(0);

    randomSpeed = 20;
    colors = ['pink', 'green', 'blue', 'orange', 'red', 'purple'];

    x = random(width);
    y = random(height);
    prevX = x;
    prevY = y;

    deltaX = random(20);
    deltaY = random(20);
}


function draw() {
    strokeWeight(1);
    line(prevX, prevY, x, y);

    prevX = x;
    prevY = y;

    x += deltaX;
    y += deltaY;

    if (x >= width || x <= 0) {
        stroke(random(colors));
        deltaX *= -1;
    }
    if (y >= height || y <= 0) {
        stroke(random(colors));
        deltaY *= -1;
    }
    point(x, y)
}

function mousePressed() {
    x = random(width);
    y = random(height);

    deltaX = random(randomSpeed);
    deltaY = random(randomSpeed);
}
