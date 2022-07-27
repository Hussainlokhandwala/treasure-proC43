var bg,bg2,form,system,code,security;
var score=0;
var victory;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("bgImage.png")
  victory = loadImage("victroy.png");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("black");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("GREAT,YOU UNLOCKED THE TREASURE",250, 200);
  }

  drawSprites()
}