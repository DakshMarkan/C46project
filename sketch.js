var WAIT = 0;
var PLAY = 1;
var gameState = WAIT;
var backgroundImg, tankImg, enemyTankImg, runningSoldier, crawlingSoldier, playButtonImg, screen2Img;
var bk;
var form;
var game;
var playButton;
var tank;


function preload(){
  backgroundImg = loadImage("Images/background.jpg");
  tankImg = loadImage("Images/tank.png");
  playButtonImg = loadImage("Images/play.png");
  screen2Img = loadImage("Images/Screen2.avif");
}

function setup() {
 canvas = createCanvas(1200,700);
  playButton = createSprite(200,100);
  playButton.addImage(playButtonImg);
  playButton.scale = 0.4;

}

function draw() {
  background(backgroundImg); 

  if(mousePressedOver(playButton)){
    MoveToScreen();
  }

  if(gameState==PLAY){
    background(screen2Img);
    tank = createSprite(150,350);
    tank.addImage(tankImg);
    tank.scale = 0.4;
  }

  drawSprites();
}

function MoveToScreen(){
  gameState = PLAY;
  playButton.visible = false;
  
}
