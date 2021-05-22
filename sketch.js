var gameState = 0;
var background, backgroundImg;
var start, startImg;
var story, storyImg;
var infoSlide, infoSlideImg;

function preload(){
backgroundImg = loadImage("images/background.png");
startImg = loadImage("images/start.png");
storyImg = loadImage("images/story.png");
infoSlideImg = loadImage("images/infoSlide.png");
level1Img = loadImage("images/level1.png");
}

function setup() {
createCanvas(1000,600);
startButton = createSprite(100,350);
startButton.addImage(startImg);
startButton.scale = 0.5;

storyButton = createSprite(100,250);
storyButton.addImage(storyImg);
storyButton.scale = 0.5;

}

function draw() {
background(backgroundImg);  

if(mousePressedOver(startButton)){
backgroundImg = null;
startButton.visible = false;
storyButton.visible = false;
background(level1Img);
}

if(mousePressedOver(storyButton)){
backgroundImg = null;
startButton.visible = false;
storyButton.visible = false;
background(infoSlideImg);
}
drawSprites();
}