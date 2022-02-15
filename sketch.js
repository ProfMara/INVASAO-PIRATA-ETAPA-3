const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, cenario;
var canvas, angle, torre, solo, canhao;
var bala;

var balas = [];

function preload() {
    cenario = loadImage("./assets/background.gif");
    torreIMG = loadImage("./assets/tower.png");
}

function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    angle = 20

    solo = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
    World.add(world, solo);

    torre = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
    World.add(world, torre);
    angleMode(DEGREES);
    angle = 15;
    canhao = new Canhao(180, 110, 130, 100, angle);
    bala = new BalaCanhao(canhao.x, canhao.y)
}

function draw() {
    background(189);
    image(cenario, 0, 0, width, height);

    Engine.update(engine);

    rect(solo.position.x, solo.position.y, width * 2, 1);
    push();
    imageMode(CENTER);
    image(torreIMG, torre.position.x, torre.position.y, 160, 310);
    pop();

    //comando for que percorrerá a matriz de balas de canhão para mostrar elas

    bala.display()
    canhao.display();

}

function keyReleased() {
    if (keyCode === DOWN_ARROW) {

        //criar a bala de canhao

        //adicionar ela na matriz

        //atirar ela
        bala.atirar();
    }
}
//função que irá mostrar as balas se houver balas