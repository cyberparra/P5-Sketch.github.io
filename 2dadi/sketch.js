/*

immagini dei dadi by @phidari / open clipart

*/

let btn;
let lancio1, lancio2;
let roll = 0;
let dado, dado1, dado2, d0, d1, d2, d3, d4, d5, d6;
let w, h;
let dw, dh; //dimensione immagini
let dx, dx2, dy; //posizione immagini
let btny,btnx;

let dadi = [];

function preload() {
  dadi[0] = loadImage("dadi/0.png");
  dadi[1] = loadImage("dadi/1.png");
  dadi[2] = loadImage("dadi/2.png");
  dadi[3] = loadImage("dadi/3.png");
  dadi[4] = loadImage("dadi/4.png");
  dadi[5] = loadImage("dadi/5.png");
  dadi[6] = loadImage("dadi/6.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  w = windowWidth;
  h = windowHeight;
 
  
  dw = w / 7.5;
  dh = dw;
  dx = w / 2 - dw * 1.25;
  dx2 = w / 2 + dw / 4;
 
  dy = h / 4;

  btn = createButton("LANCIO");
  btnx=w/2-30;
  btny=h/8;
  btn.position(btnx, btny);

  btn.mousePressed(lanciadadi);
  background(255);
  fill(255);
  textSize(128);
  dado1 = dadi[0];
  dado2 = dadi[0];
  frameRate(60);
}

function lanciadadi() {
  roll = 1;
  lancio1 = int(random(1, 7));
  lancio2 = int(random(1, 7));
  dado1 = dadi[lancio1];
  dado2 = dadi[lancio2];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
 
   w = windowWidth;
  h = windowHeight;
 
  btnx=w/2-30;
  btny=h/1.5;
  btn.position(btnx, btny);
  
  dw = w / 7.5;
  dh = dw;
  dx = w / 2 - dw * 1.25;
  dx2 = w / 2 + dw / 4;
 
  dy = h / 4;

  //line(w / 2, 0, w / 2, h);
  if (roll == 0) {
    image(dado1, dx, dy, dw, dh);
    image(dado2, dx2, dy, dw, dh);
  } else {
    image(dado1, dx, dy, dw, dh);
    image(dado2, dx2, dy, dw, dh);
  }
}
