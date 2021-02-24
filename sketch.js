let grafo;
let ponte;
let inputs;
function setup() {
  createCanvas(600, 600);
  strokeWeight(3)
  textAlign(CENTER);
  inputs = new InputWrapper()
  
   
   
   
  grafo = new Grafo()
  grafo.random_nos(4)
  grafo.addAresta(0, 1)
  grafo.addAresta(1, 2)
  grafo.addAresta(2,0)
  grafo.addAresta(3, 2)
  // grafo.random_nos(8)
  // grafo.addAresta(0, 1)
  // grafo.addAresta(0, 2)
  // grafo.addAresta(3, 2)
  // grafo.addAresta(3, 1)
  // grafo.addAresta(4, 3)
  // grafo.addAresta(4, 5)
  // grafo.addAresta(6, 5)
  // grafo.addAresta(7, 5)
  // grafo.addAresta(7, 6)
  
//   grafo.addAresta(0, 1)
//   grafo.addAresta(1, 2)
//   grafo.addAresta(0, 2)
  
//   //grafo.addAresta(3, 2)
//   grafo.addAresta(3, 4)
//   grafo.addAresta(3, 5)
//   grafo.addAresta(5, 4)

  
  //grafo.addAresta(4, 2)
  
 
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