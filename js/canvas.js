const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth= 600;
canvas.height =400;

context= canvas.getContext('2d');
context.fillStyle = "white";
context.fillRect(0,0,canvas.width,canvas.height);


let color ='black';
let tamano = 20;
let pintura = false;

let x1= 40;
let y1= 300;


window.addEventListener("load",  function draw(){

  context.font = 'italic bold 300px Roboto, sans-serif ';
  context.strokeText('A a', x1, y1);


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

    const distance = Math.sqrt((x- x1) + 
      (y- y1));


  if ( distance< x1 && distance <y1 && pintura) {

   context.lineTo(x,y);
   context.strokeStyle= color;
   context.lineWidth = 20;
   context.lineCap= 'round';
   context.stroke();


  }
  else{
    console.log('No muestra pintura');
  }

   })


 canvas.addEventListener('click', function top(event){

  if (pintura) {
 
    context.closePath();
       context.stroke();
     pintura = false;
  }

      event.preventDefault();
 })


