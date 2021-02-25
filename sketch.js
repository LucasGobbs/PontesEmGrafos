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
    // c
    grafo.calcular_descritivo()
  } 
  if(keyCode === 88){
    // x
    grafo.generate_json()
  }
  const value = 15
  switch(keyCode){
    case UP_ARROW:
      grafo.nos.forEach(element => element.y -= value)
      break;
    case DOWN_ARROW:
      grafo.nos.forEach(element => element.y += value)
      break;
    case RIGHT_ARROW:
      grafo.nos.forEach(element => element.x += value)
      break;
    case LEFT_ARROW:
      grafo.nos.forEach(element => element.x -= value)
      break;
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