let musica;
let imagen;

function setup() {
  createCanvas(1000, 800);
  palavra = preto();
  musica.loop();
}
function preload(){
  imagen = loadImage("cr7.jfif");
  musica = loadSound("musica.mp3");
}
function draw() {
  background("red");
  image(imagen, 0,0,1000,800);
  manoelgomes();
  tata();
  preto();
}

function manoelgomes(){
  let minimo = 0; 
  let maximo = width;
  let seguir = map(mouseX, 0, width, 1, palavra.length);
  let start = palavra.substring(0,seguir);
  text(start,500,400);
}  

function tata(){
  fill("lightorange");
  textSize(27);
  textAlign(CENTER,CENTER);
}

function preto(){
  let palavras = ["laele", "enzodocapa", "davizindocapa", "canetaazul"];
  return random(palavras);
}