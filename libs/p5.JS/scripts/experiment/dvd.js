let x, y;
let deltaX, deltaY;
let dvdWidth, dvdHeight;
let dvdLogo;
let r, g, b;

function preload() {
    dvdLogo = loadImage('scripts/experiment/assets/dvd_logo.png');
}

function setup() {
    createCanvas(600, 400);

    dvdWidth = dvdLogo.width;
    dvdHeight = dvdLogo.height;

    x = random(width);
    y = random(height);
    deltaX = 1.5;
    deltaY = 1.5;
    setRandomColor();
}

function setRandomColor() {
    tint(random(100, 255), random(100, 255), random(100, 255));
}

function draw() {
    background(0);

    x += deltaX;
    y += deltaY;

    if (x + dvdWidth >= width) {
        setRandomColor();
        x = width - dvdWidth;
        deltaX *= -1;
    } else if (x <= 0) {
        setRandomColor();
        x = 0;
        deltaX *= -1;
    }
    
    if (y + dvdHeight >= height) {
        setRandomColor();
        y = height - dvdHeight;
        deltaY *= -1;
    } else if (y <= 0) {
        setRandomColor();
        y = 0;
        deltaY *= -1;
    }

    image(dvdLogo, x, y, dvdWidth, dvdHeight);
}

function mousePressed() {
    x = random(width);
    y = random(height);
}
