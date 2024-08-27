let screenWidth, screenHeight;
let squareSize;
let baseX, baseY;
let arcWidth, arcHeight;
let tailWidth, tailHeight;
let squareSpaceOffset = 2;
let dockerBlue = '#0db7ed';

function setup() {
  screenWidth = 500;
  screenHeight = 500;
  squareSize = screenWidth / 20;

  baseX = screenWidth / 2;
  baseY = screenHeight / 3;

  arcWidth = screenWidth / 3;
  arcHeight = screenHeight / 4;
  tailWidth = screenWidth / 5;
  tailHeight = screenHeight / 4;

  createCanvas(screenWidth, screenHeight);
  background(0);
  fill(dockerBlue);

  drawSquares();
  drawDolphin();
  drawTail();
  drawText();
}

function drawSquares() {
  let rows = [1, 3, 5];
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i]; j++) {
      square(
        baseX + squareSize + (j - Math.floor(rows[i] / 2)) * squareSize,
        baseY + i * squareSize,
        squareSize
      );
    }
  }
}

function drawDolphin() {
  arc(baseX + squareSize * 1.5, baseY + 3 * squareSize, arcWidth, arcHeight,2 * PI, PI);
}

function drawTail() {
    arc(baseX + squareSize * 6, baseY + 3 * squareSize, tailWidth / 1.5, tailHeight / 2, PI, 2*PI-QUARTER_PI, PIE);
    arc(baseX + squareSize * 6, baseY + 3 * squareSize, tailWidth / 1.5, tailHeight / 5, 2*PI-QUARTER_PI, PI, OPEN);
}

function drawText() {
    textSize(screenHeight / 10);
    textAlign(CENTER, CENTER);
    text("Docker", screenWidth / 2 + squareSize*2, baseY + arcHeight + squareSize * 2);
  }