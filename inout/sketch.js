var x, y;
var x1, y1;
var a = 0;
var r1 = 12;
var r;
var k;
var R,G,B;
var step;
var sli;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  stroke(255);
  noFill();
  //fill("purple")
  strokeWeight(1);
  sli=createSlider(10,180,10);
  sli.position(width/2,20);
}

function draw() {
  background(30);
  rotateX(60);
  
  step=sli.value();

  //step=map(mouseX,50,width,10,90);
  cerchi();
  
 
}

function cerchi() {
  for (m = 0; m < 25; m++) {
    r = r1 * m;
    cerchio();
    R=map(m,0,25,0,255);
    G=map(m,0,25,100,200);
    B=map(sin(frameCount + m *3) * 100,0,1,10,14);
    
    stroke(R,G,B);
  }
}

function cerchio() {
  beginShape();
  for (n = 0; n < 360; n += step) {
    x = cos(n) * r;
    y = sin(n) * r;
    z = sin(frameCount + m * 10) * 100;

    vertex(x, y, z);
  }
  endShape(CLOSE);
}
