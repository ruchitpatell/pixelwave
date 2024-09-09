function setup() {
    createCanvas(600, 400);
    background(0);
}

function draw() {
    strokeWeight(random(5));
    stroke(getRandomColor());
    rx = random(width), ry = random(height)
    line(rx, ry, rx+random(-20, 20), ry+random(-20, 20));
}

let colors = ['pink', 'green', 'blue', 'orange', 'red', 'purple'];

function getRandomColor() {
    return random(colors);
}
function mousePressed() {
    background(0);
}