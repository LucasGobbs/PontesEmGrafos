let grafo;
let ponte;

function setup() {
  createCanvas(400, 400);
  grafo = new Grafo()
  grafo.random_nos(8)
  grafo.addAresta(0, 1)
  grafo.addAresta(0, 2)
  grafo.addAresta(3, 2)
  grafo.addAresta(3, 1)
  grafo.addAresta(4, 3)
  grafo.addAresta(4, 5)
  grafo.addAresta(6, 5)
  grafo.addAresta(7, 5)
  grafo.addAresta(7, 6)
  //grafo.addAresta(4, 2)
  
  ponte = new Ponte(grafo)
}

function draw() {
  background(220);
  grafo.update()
  grafo.draw()
}