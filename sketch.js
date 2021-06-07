var hypnoticBall, database;
var position;
var gState = 0;
var pCount = 0;
var form,player,game;

function setup(){
  database = firebase.database();
  createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
}
