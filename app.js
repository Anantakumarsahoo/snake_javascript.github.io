const canvas= document.getElementById('game');


const ctx= canvas.getContext('2d');
 class snakepart{
    constructor(x,y){
      this.x= x;
      this.y = y;
    
    }


 }
let taillength=2;


 var speed= 7;
let tilecount =20;
let tillSize =canvas.width/tilecount-2;

let headx= 10;
let heady= 10;
let score=0;

let applex=5;
let appley =5;


let xvelocity =0;
let yvelocity =0;
const  snakeparts= [];


const gulpsound = new Audio("food.mp3")



//gameloop
function drawGame(){
    changesnakeposion();
  
  let result = isGameover();
   if(result){
      return;
 }


    clearscreen();
   

   cheackapplecollision();
    drawsnake();
    drawscqure();
    drawapplle();
    setTimeout(drawGame,1000/speed) 

}
function isGameover(){
    let gameover = false;

  if(yvelocity ===0 && xvelocity ===0)
  {
    return false;
  }

    //wales
    if(headx < 0){
        gameover =true;
    }
    else if(headx === tilecount){
        gameover =true;
    }
    else if(heady <0)
    {
        gameover= true;
    }
    else if(heady === tilecount){
        gameover=true;
    }
   for(let i =0; i< snakeparts.length;i++)
   {
    let part = snakeparts[i];
    if(part.x ===headx && part.y ===heady)
    {
        gameover=true;
        break;
    }
   }


    if(gameover){
        ctx.fillStyle = "white";
        ctx.font = "50px verdana";


        ctx.fillText('game over!',canvas.width /6.5,canvas.height/2)
    }

    return gameover;
    
}

function drawscqure(){
    ctx.fillStyle = "white"
    ctx.font ="10px verdana"
    ctx.fillText("score"+ score,canvas.width-50,10);    
}


function clearscreen(){
 ctx.fillStyle="black"
  ctx.fillRect(0,0,canvas.width,canvas.height)


}
    function drawsnake(){
 
   ctx.fillStyle = 'orange';
   for(var i=0; i < snakeparts.length; i++)
   {
    let part = snakeparts[i];
    ctx.fillRect(part.x *tilecount,part.y *tilecount,tillSize,tillSize)
   }
   
  snakeparts.push(new snakepart(headx,heady));
    while(snakeparts.length > taillength)
     {
        snakeparts.shift();
     }
     ctx.fillStyle="green"
     ctx.fillRect(headx * tilecount,heady*tilecount,tillSize,tillSize)
        

   }
    function changesnakeposion(){
     headx =headx +xvelocity;
     heady=heady+ yvelocity;


    }
    function drawapplle(){
    ctx.fillStyle= 'red'
    ctx.fillRect(applex* tilecount,appley*tilecount,tillSize,tillSize)
    }

function cheackapplecollision(){
 if (applex == headx && appley == heady){
  applex = Math.floor(Math.random() * tilecount);
  appley = Math.floor(Math.random() * tilecount);
  taillength++;
  score++;
  gulpsound.play();
  
    
 }

}


    window.addEventListener("keydown",keydown);

  function keydown(key){
    //up
    console.log(key.keyCode);
    if(key.keyCode ==38){
        if(yvelocity ==1)
        return;
        yvelocity= -1;
        xvelocity=0;
    }
    // down
    if(key.keyCode ==40){
        if(yvelocity ==-1)
        return;
        yvelocity= 1;
        xvelocity=0;
    }

    //left
    if(key.keyCode ==37){
        if(xvelocity ==1)
        return;
        yvelocity= 0;
        xvelocity=-1;
    }
    //rigth
    if(key.keyCode ==39){
        if(xvelocity ==-1)
        return;
        yvelocity= 0;
        xvelocity=1;
    }

      
  }



drawGame();
