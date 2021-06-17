img="";
status="";
function setup()
{
canvas=createCanvas(640,420);
canvas.center();
objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:Detecting objects";

}
function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
    objectDetector.detect(img,gotResult);
}
function preload(){
    img=loadImage('lion and tiger.jpg');
}
function draw(){
    image(img,0,0,640,420);
fill("#FF0000");
text("tiger",45,75);
noFill();
stroke("#FF0000");
rect(30,60,450,350);

fill("#FF0000");
text("lion",320,120);
noFil();
stroke("#FF0000");
rect(300,90,270,320);
}