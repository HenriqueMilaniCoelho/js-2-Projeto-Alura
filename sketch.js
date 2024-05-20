function setup() {
    createCanvas(650, 450);
    background("black");
  }
  
  function draw() {
    
    stroke("blue");
    fill("red");
    
    if (mouseIsPressed){
      circle(mouseX, mouseY , 10)
    }
  }