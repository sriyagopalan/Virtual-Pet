var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload() {
  dogIMG = loadImage("Dog.png"); 
}

function setup() {
  createCanvas(500, 500);
  dogSprite = createSprite(width/2, 80, 10,10);
  dogSprite.addImage(dogIMG);
  foodStock=database.ref('food');
  foodStock.ong("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogHappy);
  }
  drawSprites();
  fill();
  stroke();
  //Press UP_ARROW Key to feed Drago Milk!
}

function foodStock() {
  //Fuction to read values from D8
  function readStock(data){
    foods=data.val();
  }

  //Fuction to write values in D8
  function writeStock(x){
    database.ref('/').update({
      Food: x
    })
  }
}

//Fuction to write values in D0
function writeStock(x){

  if(x<=0){
    x-0
  }else{
    x-x-1;
  }
  database.ref('/').update({
      Food:x
  })
}





