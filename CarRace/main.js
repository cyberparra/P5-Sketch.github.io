
//select the canvas by id
const canvas=document.getElementById("myCanvas");
//set the canvas size like a road
//move this: canvas.height=window.innerHeight in animate() to clean the canvas

canvas.width=200;

//to draw on the canvas create a drawing 2d context
const ctx = canvas.getContext("2d");

const image = document.getElementById("car");
const image2 = document.getElementById("car2");

//create the road
const road = new Road(canvas.width/2,canvas.width*0.9);

//create a car(x,y,width, height)
const car = new Car(120,400,22*2,39*2);

const car2 = new Car2(80,100,44,57);

//draw the cars in the context
car.draw(ctx);
car2.draw2(ctx);

//NOTE: create the car object in a new car.js file to be set in index.html

//to move the car you need to call an animate function

animate()


function animate(){
    car2.update2();
    car.update();
   
    //clean the canvas every frame
    canvas.height=window.innerHeight;

    road.draw(ctx);

    //draw the car in the context
   
    car2.draw2(ctx);
    car.draw(ctx,"black");

    requestAnimationFrame(animate); //repeat in infite loop like draw() in P5

}