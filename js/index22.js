var back = document.getElementById('back')
back.addEventListener('touchstart', ()=>{
  
  window.location.href = "../index.html"
  
  
})

var next = document.getElementById('next')
next.addEventListener('touchstart', ()=>{
  
  window.location.href = "../index3.html"
  
})


var canvas = document.getElementById('canvas')
var ctx = canvas.getContext("2d");



var map = new Image();
map.src = "../img/map.png"
map.onload= render()

if(map.onload == false){
  
  window.location.href = "../pg/index2.html"
  
  
}

function render(){
  
  ctx.clearRect(0,0,canvas.width,canvas.height)
  
  ctx.drawImage(map,0,0,400,400,0,0,canvas.width,canvas.height)
  
}

function update(){
  
  
}

function loop(){
  
  
  
}