const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var hierro;
var hule,hule1,hule2,hule3,hule4,hule5,hule6,hule7;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    rubber = new Rubber(800,450,60);
    stone = new Stone(600,450);
    hierro = new Hierro(300,450);
    hule = new Hule(400,450,10);
    hule1 = new Hule(405,450,10);
    hule2 = new Hule(410,450,10);
    hule3 = new Hule(415,450,10);
    hule4 = new Hule(420,450,10);
    hule5 = new Hule(425,450,10);
    hule6 = new Hule(430,450,10);
    hule7 = new Hule(440,450,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    hierro.display();
    hule.display();
    hule1.display();
    hule3.display();
    hule4.display();
    hule5.display();
    hule6.display();
    hule7.display();
}