function setup(){
  createCanvas(600,600)
  
  var x = width/2
  var vx = 1
}

function draw() {
  vx = 1 - (x/width/2)
  x = x + vx
  
  ellipse(x,height/2,20)
}
