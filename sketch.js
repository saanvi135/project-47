var canvas
var background
var form
var player 
var playerCount

function setup(){
canvas=createCanvas(windowWidth,windowHeight)
game=new Game()
game.start()
}

function draw(){
  background("white")
}
function windowResize(){
  resizeCanvas(windowWidth,windowHeight)
}