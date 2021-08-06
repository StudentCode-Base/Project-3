var ball
function setup() {
  createCanvas(400, 400);
  ball = {
    x:100,
    y:100,
    r:20,
    xspeed:20,
    yspeed:20,
    color:color(random(0,255),random(0,255),random(0,255))
  }


}

function draw() {
  background(random(0,255),random(0,255),random(0,255));
  //background("white");
  circle(ball.x,ball.y,ball.r)
  fill(ball.color)
}