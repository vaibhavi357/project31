function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(480, 20, 240, 780);
}

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

for (var i = 0; i <= width; i = i+80){
    divisions.push(new Divisions(i, height = divisionHeight/2, 10, divisionHeight));
}

for (var j = 40; j <= width; j = j+50){
	plinkos.push(new Plinko(j, 75));
}

for (var j = 15; j <= width-10; j= j+50){
	plinkos.push(new Plinko(j, 175));
}

if (frameCount % 60 === 0) {
	particles.push(new Particle(random(width/2-10), 10, 10))
}

function draw() {
  background(0);  

  ground.display();
  plinkos.display();
  particles.display();
  divisions.display();
  drawSprites();
}