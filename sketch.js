//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;




function preload()
{
  //load images here
  
dog.loadImage(dogImg.png);
happyDog.loadImage(dogImage1.png);
}


function setup() {
  database = firebase.databse();
  console.log(database);
  createCanvas(500, 500);

foodStock = database.ref('food');
foodStock.on("value",readStock);

dog = createSprite(250,250,20,20);

  
}


function draw() {  
background("46,139,87");

if(keyWentDown(UP_ARROW)){
 writeStock(foods);
 dog.addImage(happyDog);

readStock();
writeStock();


drawSprites();

}


function readStock(data){

  foodS=data.val();

}

function writeStock(x){

if(x<=0){
 x=0;
}else{

x=x-1;


}


  database.ref('/').update({
   food:x

})



}
























  drawSprites();
  //add styles here

}



