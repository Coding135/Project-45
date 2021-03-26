const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint; 

function gamepage() { 
  window.location = "gamepage.html";
} 

var kindman, evilman, helpman, fireball, protection, ground 

function setup() { 
  var canvas = createCanvas(900, 900); 
  ground = new Ground(500, 500, 900, 20);  
}

function draw() { 
  ground.display(); 
}