let angle;

function setup() {
  createCanvas(600, 400);
  angle = 0;
}

function draw() {
  background(240);

  // Translate to the center of the canvas
  translate(width / 2, height / 2);

  // Rotate the coordinate system by the current angle
  rotate(angle);

  // Draw a triangle centered at the origin (which is now the center of the canvas)
  fill(150, 100, 200);
  stroke(0);
  strokeWeight(2);
  triangle(-50, 50, 50, 50, 0, -50);

  // Increment the angle for continuous rotation
  angle += 0.01;
}
