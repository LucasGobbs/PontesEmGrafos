let grafo;
let ponte;
let inputs;
function setup() {
  createCanvas(900, 900);
  strokeWeight(3)
  textAlign(CENTER);
  inputs = new InputWrapper()
  grafo = new Grafo()

}

function keyPressed() {
  if (keyCode === 67) {
    grafo.calcular_descritivo()
  } 
  
  if(keyCode === 88){
    grafo.generate_json()
  }
}
function draw() {
  background(0);
  grafo.update()
  
  inputs.draw()
  inputs.update()
  
  grafo.draw()
  
}
function alog(nome, a){
  buffer = `${nome}: [ ` 
  a.forEach(element => buffer += `${element} `)
  buffer += ']'
  console.log(buffer)
}