var x
var vx
var i

function setup(){
  createCanvas(600,600)

  x = 400
  vx = 1
  i = 0
}

function draw() {
  background(150)
  vx = 5*sin(i)
  x = x - vx

  ellipse(x,height/2,20)

  if (i < 2*PI) {
    i = i + 0.05
  }else {
    i = 0
  }
}
