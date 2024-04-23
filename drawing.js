let bubbles = [];

function setup() {
  createCanvas(800, 600);
  
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height, height * 2);
    let speed = random(1, 3);
    bubbles.push(new Bubble(x, y, speed));
  }
}

function draw() {
  background(220);
  
 
  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].display();
    bubbles[i].move();
    
    if (bubbles[i].y < -50) {
      bubbles.splice(i, 1);
    }
  }

  if (random() < 0.05) {
    let x = random(width);
    let y = random(height, height * 2);
    let speed = random(1, 3);
    bubbles.push(new Bubble(x, y, speed));
  }
}

class Bubble {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = random(10, 30);
  }
  
  display() {
    noStroke();
    fill(150, 200, 250, 150);
    ellipse(this.x, this.y, this.size);
  }
  
  move() {
    this.y -= this.speed;
  }
}