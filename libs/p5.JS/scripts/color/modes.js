function setup() {
    createCanvas(600, 400);
    noLoop();
  
    // rgb Color Mode
    colorMode(RGB);
    for (let i = 0; i < width / 2; i++) {
      stroke(i, 0, width / 2 - i);
      line(i, 0, i, height / 2);
    }
  
    // hsb Color Mode
    colorMode(HSB, 360, 100, 100);
    for (let i = width / 2; i < width; i++) {
      stroke((i - width / 2) * 360 / (width / 2), 100, 100);
      line(i, 0, i, height / 2);
    }
  
    // Brightness and Saturation in HSB mode
    for (let j = 0; j < height / 2; j++) {
      stroke(200, 100, j * 100 / (height / 2)); // Varying brightness
      line(0, height / 2 + j, width / 2, height / 2 + j);
  
      stroke(200, j * 100 / (height / 2), 100); // Varying saturation
      line(width / 2, height / 2 + j, width, height / 2 + j);
    }
  }
  