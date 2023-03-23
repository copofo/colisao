const f = {
  top: () => document.getElementById('cima'),
  left: () => document.getElementById('esquerda'),
  right: () => document.getElementById('direita'),
  bottom: () => document.getElementById('baixo'),
  c3: () => document.getElementById('c3')
}

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext("2d");

var next = document.getElementById('next')


next.addEventListener('click', ()=>{
  
  window.location.href = "../pg/index2.html"
  
})

function coliser(){
  if(posX + sizeWidth > blockX && posX < blockX + sizeWidth && posY + sizeHeight > blockY && posY < blockY + sizeHeight){
    
    if(movTop){posY = posY + velCima + speed}
    if(movRigth){posX = posX - velDir - speed2}
    if(movLeft){posX = posX + velDir + speed2}
    if(movBottom){posY = posY - velCima - speed}
    objColor = "#f00"
    
    
  } else{
    objColor = "#00f"
  }
}



var movTop = movLeft = movBottom = movRigth = false
var speed = 0;
var speed2 = 0;
var sizeWidth = 25
var sizeHeight = 7.5
var posX = 0
var posY = 0
var objColor = "#00f"
var blockX = canvas.width / 2 - 25;
var blockY = canvas.height / 2 - 25;
var contWidth;

var velCima = 1
var velDir = 3.3


var coords = canvas.getBoundingClientRect()

ctx.fillRect(posX,posY,sizeWidth,sizeHeight)



function updateBlock(){
  if(movLeft){
    posX = posX - (velDir + speed2);
    if(posX + canvas.width < canvas.width){
      
      posX = posX + velDir + speed2
      
    
    }
    
  }
  if(movRigth){
    posX = posX + velDir + speed2;
    if(posX + sizeWidth > canvas.width){
     posX = posX - velDir - speed2
     
    }
  }
  if(movBottom){
    posY = posY + velCima + speed;
    if(posY + sizeHeight > canvas.height){
      posY = posY - velCima - speed;
        
    }
    
  }
  if(movTop){
    posY = posY - velCima - speed;
  }
  if(posY + canvas.height < canvas.height){
    posY = posY + velCima + speed;
    
  }
  
}


f.c3().addEventListener('touchstart', ()=>{
  f.c3().style.background = "black"
  speed = velCima;
  speed2 = velDir;
})

f.c3().addEventListener('touchend', ()=>{
  speed = 0;
  speed2 = 0;
  f.c3().style.background = "gray"
})

f.top().addEventListener('touchstart', ()=>{
  movTop = true
  f.top().style.background = "black"
})


f.left().addEventListener('touchstart', ()=>{
  movLeft = true
  f.left().style.background = "black"
})

f.bottom().addEventListener('touchstart', ()=>{
  movBottom = true
  f.bottom().style.background = "black"
})   

f.right().addEventListener('touchstart', ()=>{
  movRigth = true
  f.right().style.background = "black"
})

f.top().addEventListener('touchend', ()=>{
  movTop = false
  f.top().style.background = "gray"
})


f.left().addEventListener('touchend', ()=>{
  movLeft = false
  f.left().style.background = "gray"
})

f.bottom().addEventListener('touchend', ()=>{
  movBottom = false
  f.bottom().style.background = "gray"
})   

f.right().addEventListener('touchend', ()=>{
  movRigth = false
  f.right().style.background = "gray"
})



function update(){
  updateBlock();
  coliser();
  
}

function draw2(){
  
    sizeWidth = 10
    sizeHeight = 10
    
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.fillStyle = "#000"
    ctx.fillRect(blockX,blockY,sizeWidth,sizeHeight)
    ctx.fillStyle = objColor;
    ctx.fillRect(posX,posY,sizeWidth,sizeHeight)
  
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
    
    
    
    if(coords.width > 379.21429443359375){
    
      draw2()
    
    } else {
      
      draw()
      
    }
    
  
    update()
    
    
    
  
  
  
}

loop();









