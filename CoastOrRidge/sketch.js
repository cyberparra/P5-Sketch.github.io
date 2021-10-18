/*
 Experiment with Perlin Noise
 Cyberparra
 oct.2021
  
 */


let noiseX = 0.0;
let x = 0;
let y = 0;

let newb;
let saveimg;

function setup() {
  var canvas;
  
 canvas = createCanvas(windowWidth, windowHeight - 100);
 
  
  /*
  if (windowWidth >= 600 && windowHeight >= 600) {
    canvas = createCanvas(600, 600);
  } else {
    canvas = createCanvas(windowWidth, windowHeight - 100);
  }
*/
  
  var canvx = (windowWidth - width) / 2;
  var canvy = (windowHeight - height) / 2;

  canvas.position(canvx, canvy);
  newb=createButton("Refresh");
  newb.position(canvx);
  newb.mousePressed(refresh);
  saveimg=createButton("Save image");
  saveimg.position(canvx+100);
  saveimg.mousePressed(salva);
  
  background(0);
 // stroke(220,255,0);
  stroke(255);
}

function draw() {
  x += 1;
  y = noise(noiseX) * 400;

  // point(x, y);
  for (k = 1; k < 50; k++) {
    costa(10 * k);
  }

  if (x < width) {
    
    //noLoop();
     
    noiseX += 0.01;
    //x = 0;
    //y = 0;
  }
}

function costa(n) {
  point(x, y - random(n));
}

function refresh(){
  background(0);
  x = 0;
  y = 0;
  
}

function salva(){
  saveCanvas('myCoastOrRidge', 'png');
}

