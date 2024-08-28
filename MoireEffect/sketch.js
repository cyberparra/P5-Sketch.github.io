var x,y;
var w=20,h=20;
var k;
var sc=1;
var rid=0;
var step=10;
var dir=1;

function setup() {
  var canvas;
  
 canvas = createCanvas(windowWidth, windowHeight - 100);
  x=width/2;
  y=height/2;
  k=x;
  noFill();
  frameRate(14);

}

function draw() {
  background(220);
   //sc=map(mouseY,0,height,1,10);
  scale(sc);
  k+=step*dir
  /*
  if(k>width/2+100){
    dir=-1
  }
  if(k<width/2-100){
    dir=1
  }
  
  */
 
  if(k>width){
    dir=-1
  }
  if(k<0){
    dir=1
  }
   
   
   /*
  k+=3;
  if(k>width+width/2){
    k=0-width/2;
  }
  */
  
  for(n=0;n<1000;n=n+10){
      stroke("purple")
    ellipse(x,y,n,n); 
      stroke("red")
    ellipse(k,y,n-rid,n-rid); 
    
  }

}