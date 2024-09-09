function draw_ear_circle() {
    fill(hueValue, 100, 100);
    circle(262, 85, 20);
    circle(337, 85, 20);
}

function draw_ear_rect() {
    fill(hueValue, 50, 80);
    rect(255, 90, 15, 60);
    rect(330, 90, 15, 60);
}

function draw_main_face() {
    fill('cyan');
    circle(300, 200, 150);
}

function draw_outer_eye() {
    fill('yellow');
    circle(320, 180, 2*outer_eye_radius);
    circle(260, 180, 2*outer_eye_radius);
}

function animate_inner_eye() {
    x1 = 260 + outer_eye_radius * -cos(angle);
    y1 = 180 + outer_eye_radius * sin(angle);

    // right inner eye
    x2 = 320 + outer_eye_radius * cos(angle);
    y2 = 180 + outer_eye_radius * -sin(angle);

    angle += angleChange;

    hueValue += hueDirection;
    if (hueValue >= 360 || hueValue <= 0) {
        hueDirection *= -1;
    }

    fill(hueValue, 100, 100);
    circle(x1, y1, inner_eye_radius * 2);
    circle(x2, y2, inner_eye_radius * 2);
}

function draw_nose() {
    triangle(-noseSize, noseSize, noseSize, noseSize, 0, -noseSize);
    noseAngle += noseAngleChange;
}

function draw_smile() {
    noFill();
    stroke(hueValue, 100, 100);
    strokeWeight(2);
    arc(300, 250, 50, 10, -0.5 * QUARTER_PI, PI, OPEN);
    stroke(0);
}

function setup() {
    createCanvas(600, 400);

    stroke(0);
    strokeWeight(1);
    outer_eye_left_centerx = 270;
    outer_eye_radius = 15;
    inner_eye_radius = 5;
    angle = 0;
    angleChange = 0.5;
    hueValue = 0;
    hueDirection = 1;
    noseSize = 10;
    noseAngle = 0;
    noseAngleChange = 0.01;

    draw_main_face();
}

function draw() {
    draw_ear_rect();
    draw_ear_circle();
    draw_smile(); 
    animate_inner_eye();
    translate(width / 2, 20 + height / 2);
    rotate(noseAngle);
    draw_nose();   
}
  