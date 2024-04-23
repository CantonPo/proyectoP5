function setup(){
    createCanvas(600,400)
    background (220)
}



function draw() {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    
    stroke(r, g, b);
    line(x1, y1, x2, y2);  
}

function mousePressed(){
    
    
}