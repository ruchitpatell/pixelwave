function setup() {
    createCanvas(600, 400);
    background(240);
  
    let c = color(150, 100, 255, 150);
    let r = red(c);
    let g = green(c);
    let b = blue(c);
    let a = alpha(c);
    console.log(a)
  
    fill(c);
    rect(50, 50, 100, 100);
  
    fill(r, 0, 0);
    rect(200, 50, 100, 100);
  
    fill(0, g, 0);
    rect(350, 50, 100, 100);
  
    fill(0, 0, b);
    rect(500, 50, 100, 100);
  
    fill(c, a);
    ellipse(150, 300, 200, 200);
  
    fill(255, 100, 150, a);
    ellipse(450, 300, 200, 200);
  }
  