class Grafo{
  constructor(){
    this.nos = []
    this.arestas = []
    this.adj = []
  
  }
  random_nos(n){
    for(let i = 0; i < n ; i++ ){
      this.nos.push(new No(random() * width,random() * height))
    }
  }
  random_no(){
    return Math.floor(random()*this.nos.length)
  }
  addAresta(from, to){
    this.arestas.push(new Aresta(from, to))
    
    if(this.adj[from] == null){
      this.adj[from] = []
    }
    
    this.adj[from].push(to)
    
    if(this.adj[to] == null){
      this.adj[to] = []
    }
    this.adj[to].push(from)
  }
  ePonte(from, to){
    const ponte = this.arestas.find(element=>{
      return (element.from == from && element.to) == to ||
             (element.from == to && element.from)
    })
    if(ponte){ponte.isPonte = true}
  } 
  draw(){
    this.arestas.forEach(element => {
      const from = this.nos[element.from]
      const to = this.nos[element.to]
      element.draw(from,to)
    })
    this.nos.forEach((element, index) => element.draw(index))
  }
  
  update(){
    this.nos.forEach(element => element.update())
  }
}
