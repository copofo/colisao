const f = {
  top: () => document.getElementById('cima'),
  left: () => document.getElementById('esquerda'),
  right: () => document.getElementById('direita'),
  bottom: () => document.getElementById('baixo'),
  c3: () => document.getElementById('c3')
}

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext("2d");

function coliser(){
  if(posX + sizeWidth > blockX && posX < blockX + sizeWidth && posY + sizeHeight > blockY && posY < blockY + sizeHeight){
    
    if(movTop){posY = posY + 0.35 + speed}
    if(movRigth){posX = posX - 1 - speed2}
    if(movLeft){posX = posX + 1 + speed2}
    if(movBottom){posY = posY - 0.35 - speed}
    objColor = "#f00"
    
    
  } else{
    objColor = "#00f"
  }
}

var movTop = movLeft = movBottom = movRigth = false
var speed = 0;
var speed2 = 0;
var sizeWidth = 50
var sizeHeight = 13
var posX = 50
var posY = 50
var objColor = "#00f"
var blockX = canvas.width / 2 - 25;
var blockY = canvas.height / 2 - 25;

function updateBlock(){
  if(movLeft){
    posX = posX - (1 + speed2);
    if(posX + canvas.width < canvas.width){
      posX = posX + 1 + speed2
    }
    
  }
  if(movRigth){
    posX = posX + 1 + speed2;
    if(posX + sizeWidth > canvas.width){
     posX = posX - 1 - speed2
    }
  }
  if(movBottom){
    posY = posY + 0.35 + speed;
    if(posY + sizeHeight > canvas.height){
      posY = posY - 0.35 - speed;
    }
    
  }
  if(movTop){
    posY = posY - 0.35 - speed;
  }
  if(posY + canvas.height < canvas.height){
    posY = posY + 0.35 + speed;
  }
  
}


f.c3().addEventListener('touchstart', ()=>{
  speed = 0.35;
  speed2 = 1;
})

f.c3().addEventListener('touchend', ()=>{
  speed = 0;
  speed2 = 0;
})

f.top().addEventListener('touchstart', ()=>{
  movTop = true
})


f.left().addEventListener('touchstart', ()=>{
  movLeft = true
})

f.bottom().addEventListener('touchstart', ()=>{
  movBottom = true
})   

f.right().addEventListener('touchstart', ()=>{
  movRigth = true
})

f.top().addEventListener('touchend', ()=>{
  movTop = false
})


f.left().addEventListener('touchend', ()=>{
  movLeft = false
})

f.bottom().addEventListener('touchend', ()=>{
  movBottom = false
})   

f.right().addEventListener('touchend', ()=>{
  movRigth = false
})



function update(){
  updateBlock();
  coliser();
}

function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.fillStyle = "#000"
  ctx.fillRect(blockX,blockY,sizeWidth,sizeHeight)
  ctx.fillStyle = objColor;
  ctx.fillRect(posX,posY,sizeWidth,sizeHeight)
}

function loop(){
  window.requestAnimationFrame(loop, canvas)
  update()
  draw()
}

loop();