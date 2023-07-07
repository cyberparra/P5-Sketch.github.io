/*
Utilizza questo modello per i tuoi progetti 3D.
Vai su "file" e "duplicate" in modo da lavorare sulla tua copia che potrai rinominare, modificare, salvare, scaricare.
(Per duplicre devi avere un account su p5js)


*/

let earth, earth2;
let moon, moon2;

let mars, mars2;

let x = 0,
  y = 0,
  z = 0;
let w = 20;
let h = 0.1;
let d = 20;

let r = 1;

let inmass, ok;

let earthG = 1;
let moonG = 0.166;
let marsG = 0.38;
let earthW=0, moonW=0, marsW=0;

let mass = 68;

let a = 0;
let ubuntu;


function preload() {
  moon = loadImage("moon.jpg");
  earth = loadImage("earth.jpg");
  mars = loadImage("mars.jpg");
  ubuntu = loadFont3D(UBUNTU);
}

function setup() {
  createCanvas3D(windowWidth, windowHeight);
  background3D("rgb(26,25,25)");
  hideGrid();
  getOrbit().enabled = false;
  hideToolbox()

textSize(32);
  fill(255)
  inmass = createInput();

  inmass.position(windowWidth / 2 - 100, 100);
  inmass.size(50);

  ok = createButton("OK");
  ok.position(windowWidth / 2 - 30, 100);
  ok.mousePressed(calcola);

  diffuseMap(moon);
  moon2 = sphere(x - 3, y, z, r);

  diffuseMap(earth);
  earth2 = sphere(x, y, z, r);

  diffuseMap(mars);
  mars2 = sphere(x + 3, y, z, r);

}

function draw() {
    background3D("rgb(26,25,25)");
  clear()
  moon2.setRotationY(a);
  earth2.setRotationY(a);
  mars2.setRotationY(a);

  a += 0.1;
  text("inserisci la massa (peso)",windowWidth/2-200,50)
  text(earthW,windowWidth/2 ,windowHeight/2+200);
 text(moonW,windowWidth/2-350 ,windowHeight/2+200);
 text(marsW,windowWidth/2+350 ,windowHeight/2+200);
}

function calcola() {
  mass = inmass.value();
  earthW = int(mass * earthG);
  moonW = int(mass * moonG);
  marsW = int(mass * marsG);

  //console.log(earthW, moonW, marsW);
}
