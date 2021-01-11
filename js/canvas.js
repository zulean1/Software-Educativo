const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth= 600;
canvas.height =400;

context= canvas.getContext('2d');
context.fillStyle = "white";
context.fillRect(0,0,canvas.width,canvas.height);


let color ='black';
let tamano = 20;
let pintura = false;


window.addEventListener("load",  function draw(){

  context.font = 'italic bold 300px Roboto, sans-serif ';
  context.strokeText('A a', 40, 300);


   console.log('Se esta mostrando el texto');
})

    function colores (element){
       color  = element.style.background;
    }

canvas.addEventListener('mousedown', function star(event){
    let pintura = true;
    let x = event.clientX - context.canvas.offsetLeft;
    let y = event.clientY- context.canvas.offsetTop;

  context.beginPath();
  context.moveTo(x, y);

  event.preventDefault();


})

 canvas.addEventListener('mousemove',  function pintar(event){

    let  pintura= true;
    let x = event.clientX - context.canvas.offsetLeft;
    let y = event.clientY- context.canvas.offsetTop;

  if (pintura) {

   context.lineTo(x,y);
   context.strokeStyle= color;
   context.lineWidth = 10;
   context.lineCap= 'round';
   context.stroke();
  }
  else{
    console.log('No muestra pintura');
  }

   })


 canvas.addEventListener('onmouseup', function top(event){

  if (pintura) {
    context.stroke();
    context.closePath();
     pintura = false;
  }

      event.preventDefault();
 })


