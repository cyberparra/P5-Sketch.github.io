
/*

cuori in simulazione 3D attarverso funzioni parametriche

By Adriano Parracciani
nov 2021

x(t) = 16 sin^3(t)
y(t) = 13 cos(t) - 5 cos(2 t) - 2 cos(3 t) - cos(4 t)


*/
let x,y;
let c=200;
let r=15;
var x1,y1;
var R,G,B;

function setup() {
  createCanvas(600, 500,WEBGL);
  stroke(255);
  strokeWeight(2);
  angleMode(DEGREES);
  //fill(234,56,123);
  background(20);
  noFill()
}

function draw() {
  background(20);
   rotateX(60);



  for(j=0;j<8;j++){
    raggio=r-2*j
     colore()
  fill(R,G,B,A);
    cuore(raggio);

  }
  //noLoop()

}

function cuore(raggio){



  beginShape()

  for(t=-360;t<360;t++){

   x=raggio*(16*pow(sin(t),3));
   y=-raggio*(13*cos(t)-5*cos(2*t)-2*cos(3*t)-cos(4*t));
   z=tan(frameCount + j* 10) * 100;

    //  z=sin(frameCount + j* 10) * 100;

    vertex(x,y,z);

  }
  endShape()
}


function colore(){
  R=random(220);
  G=random(220);
  B=random(220);
  A=random(1,100);

}
