const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball,Ground,
wall1,wall2,wall3,dustbina;

var engine , world;


function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	ball = new paper(100,200);
	Ground = new ground(width/2,500,width,20);
	wall1 = new  dustbin(890,480);



	Engine.run(engine);
	
}



function draw() {
 
  background("white");
  rectMode(CENTER);

	ball.display();
	Ground.display();
	//I am not displaying the dusbin outline(it looks ugly)
	wall1.display();

drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y: -100});
		}
		console.log(ball.body.position.x)
}