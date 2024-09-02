function setup() {
    createCanvas(600, 400);
    
    // background color
    background(200, 220, 240);
    
    // filled rectangle
    fill(255, 0, 0); // red
    rect(50, 50, 100, 100);
    
    fill(0, 255, 0); // green
    rect(200, 50, 100, 100);
    
    fill(0, 0, 255); // blue
    rect(350, 50, 100, 100);
    
    // stroke: border color
    stroke(255, 0, 0);
    strokeWeight(5);
    fill(255, 255, 0); // Yellow
    rect(500, 50, 100, 100);
    
    // no fill
    stroke(0, 150, 0)
    noFill();
    rect(50, 200, 100, 100);
  }
  