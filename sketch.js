var x
var vx
var i
var balls = []
var nb = 5

function setup(){
  var canvas = createCanvas(600,600)
  canvas.parent('sketch-holder');

  x = 300
  i = 0
  f = 0
  
  for(var j = 0; j < nb; j++){
    balls[j] = new Ball(width/2, (height/nb)*(j+0.5))
  }

  console.log(balls)

}

function draw() {
  background(150)
  for(var j = 0; j < nb; j++){
    balls[j].move()
    balls[j].show()
  }
}

class Ball{
  constructor(x, y){
    this.x = x
    this.y = y
    this.i = 0
    this.vx = 0
  }
  show(){
    ellipse(this.x,this.y,20)
  }
  move(){
    this.vx = 10*cos(this.i)
    this.x = this.x - this.vx
    this.i = this.i + 0.05
  }
}
