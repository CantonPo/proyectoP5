let burbujas = [];

function setup() {
  createCanvas(800, 600);
  
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height, height * 2);
    let speed = random(1, 3);
    burbujas.push(new Burbuja(x, y, speed));
  }
}

function draw() {
  background(220);
  
 
  for (let i = burbujas.length - 1; i >= 0; i--) {
    burbujas[i].display();
    burbujas[i].move();
    
    if (burbujas[i].y < -50) {
      burbujas.splice(i, 1);
    }
  }

  if (random() < 0.05) {
    let x = random(width);
    let y = random(height, height * 2);
    let speed = random(1, 3);
    burbujas.push(new Burbuja(x, y, speed));
  }
}

class Burbuja {
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