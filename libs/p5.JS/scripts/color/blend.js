function setup() {
    createCanvas(600, 400);
    noLoop();
  
    // linear Gradient with lerpColor
    let c1 = color(255, 0, 0);
    let c2 = color(0, 0, 255);
    for (let i = 0; i < width; i++) {
      let inter = map(i, 0, width, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, 0, i, height);
    }
  
    // blend Modes
    blendMode(MULTIPLY);
    fill(255, 255, 0, 128);
    ellipse(150, 300, 200, 200);
  
    blendMode(SCREEN);
    fill(0, 255, 255, 128);
    ellipse(250, 300, 200, 200);
  
    blendMode(OVERLAY);
    fill(255, 0, 255, 128);
    ellipse(350, 300, 200, 200);
  }
  