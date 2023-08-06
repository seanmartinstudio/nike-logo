let img;
let unitsX = 0
let unitsY = 0
let colorA;
let colorB;
let currentColor;
let fadeAmount = 0.005;
let isFadingForward = true;
let frames = 30

function preload(){
  img = loadImage("/nikeLogo.png");
  textureMode(IMAGE);
}

function keyPressed() {
  if (key === 's') {
    saveGif('nikeAnimation', 12);
  }
}

function setup() {
  frameRate(60)
  createCanvas(800, 800, WEBGL);
  colorA = color(255, 0, 0); // Red
      colorB = color(0, 0, 255); // Blue
      currentColor = colorA; // Start with colorA
}

function draw() {
  
  currentColor = lerpColor(colorA, colorB, fadeAmount);

  if (isFadingForward) {
    fadeAmount += 0.005;
    if (fadeAmount >= 1.0) {
      isFadingForward = false;
    }
  } else {
    fadeAmount -= 0.005;
    if (fadeAmount <= 0.0) {
      isFadingForward = true;
    }
  }

  background(currentColor);

  unitsY += 2

  noStroke()
  camera(0, 0, 200)
  texture(img)
  rotateX(radians(unitsX))
  rotateY(radians(unitsY))
  plane(150, 100, 800, 800)
}
