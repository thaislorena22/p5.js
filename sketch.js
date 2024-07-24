function setup() {
  createCanvas(600, 600);
   background("darkblue");
}

function draw() {
  
  stroke("blue");
  fill("lightblue");

  // console.log(mouseIsPressed);

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
