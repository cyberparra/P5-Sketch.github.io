
//var x=width/2;
var x=300;
var y=150;
var radius1=160;
var radius2=60;
var radius3=20;
var radius4=180;
var angle1=0;
var angle2=0;
var angle3=0;
var angle2a=90;

var alfa;
var step=10;
var s=0;
var shiftangle=45; //thsis value regulates the numbers of rays 




function setup() {
createCanvas(windowWidth, windowHeight);
stroke('#cd853f');
frameRate(20);
}

function draw() {
    translate(windowWidth/3, windowHeight/4);
  
  smooth();
  background(50);
  strokeWeight(10); 
  point(x,y);
   
  strokeWeight(1); 
  noFill();
  ellipse(x,y,50,50);
  noStroke();
  //fill('#cd853f',s);
 fill(255,s);
  ellipse(x,y,50,50);
  s=s+step;

  if (s>255){
    step=-10;
  }
  if (s==0){
    step=10;
  }
  stroke('#cd853f');
  
   

for (alfa=0; alfa<360; alfa=alfa+shiftangle) {
  
  fill(random(255), random(255), random(255));
  //planet1
var ty=radius1*sin(radians(angle1+alfa));
var tx=radius1*cos(radians(angle1+alfa));
var TX=x+tx;
var TY=y+ty;

  strokeWeight(30);
  point(TX,TY);
  strokeWeight(1);
  line(x,y,TX,TY);
  
  //noFill();
   ellipse(TX,TY,50,50);

   
   //planet2
  
  var ty2=radius2*sin(radians(angle2+alfa));
  var tx2=radius2*cos(radians(angle2+alfa));
  //stroke( #CD853F);
  strokeWeight(15);
  var TX2=TX+tx2;
  var TY2=TY+ty2;
  point(TX2,TY2);
  strokeWeight(1);
  line(TX,TY, TX2,TY2);
  
 // planet2a
  var ty2a=radius4*sin(radians(angle2a+alfa));
  var tx2a=radius4*cos(radians(angle2a+alfa));
  //stroke( #CD853F);
  strokeWeight(15);
  var TX2a=TX2+tx2a;
  var TY2a=TY2+ty2a;
  point(TX2a,TY2a);
  strokeWeight(1);
  line(TX2,TY2, TX2a,TY2a);
  
     //planet3
  
  var ty3=radius3*sin(radians(angle3+alfa));
  var tx3=radius3*cos(radians(angle3+alfa));  
 // stroke(#CD853F);
  strokeWeight(5);    
  var TX3=TX2+tx3;
  var TY3=TY2+ty3;
  point(TX3,TY3); 
  strokeWeight(1);
  line(TX2,TY2, TX3,TY3);
 // noFill();
   ellipse(TX3,TY3,10,10);
}
     
angle1=angle1+1;
angle2=angle2+5;
angle3=angle3+25;
angle2a=angle2=angle2a+3;
  
}
