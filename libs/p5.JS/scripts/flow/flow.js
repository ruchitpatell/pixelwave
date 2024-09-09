function setup() {
    createCanvas(600, 400);
    background(0);
}

// double buffered animation
// only updates when full frame ready at the end
function draw() {
    strokeWeight(1);
    stroke('white');
    fill(getRandomColor());
    circle(mouseX+50, mouseY+50, 50);
    fill(getRandomColor());
    circle(mouseX+50, mouseY-50, 50);
    fill(getRandomColor());
    circle(mouseX-50, mouseY+50, 50);
    fill(getRandomColor());
    circle(mouseX-50, mouseY-50, 50);
}

let colors = ['pink', 'green', 'blue', 'orange', 'red', 'purple'];

function getRandomColor() {
    return colors[(Math.floor(Math.random() * colors.length))];
}
function mousePressed() {
    background(0);
}