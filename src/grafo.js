class Grafo{
  constructor(){
    this.nos = []
    this.arestas = []
    this.adj = []
  
    this.ponteAlgoritmo = new Ponte()
  }
  calcular(){
    this.arestas.forEach(element => {element.isPonte = false})
    this.ponteAlgoritmo.calcular(this)
  }
  calcular_descritivo(){
    this.arestas.forEach(element => {element.isPonte = false})
    this.ponteAlgoritmo.calcular_descritivo(this)
  }
  random_nos(n){
    for(let i = 0; i < n ; i++ ){
     this.addNo(random() * width,random() * height)
    }
  }
  random_no(){
    return Math.floor(random()*this.nos.length)
  }
  addNo(x,y){
    const max = this.nos.length
 
    this.nos.push(new No(max, x, y))

  }
  
  addAresta(from, to){
    if(this.arestaJaExiste(from,to)){
      this.removeAresta(from,to)
      grafo.calcular()
      return
    }
    this.arestas.push(new Aresta(from, to))
    
    if(this.adj[from] == null){
      this.adj[from] = []
    }
    
    this.adj[from].push(to)
    
    if(this.adj[to] == null){
      this.adj[to] = []
    }
    this.adj[to].push(from)
     grafo.calcular()
  }
  removeAresta(from, to){
    if(!this.arestaJaExiste(from,to)){return;}
    let indice  = -1
    this.arestas.forEach((element,index)=>{
   
      if((element.from == from && element.to == to) ||
           (element.to == from && element.from == to)){
        indice = index
      }
    })

    this.arestas.splice(indice, 1)
 
    this.adj[from] = this.adj[from].filter(element => element != to)
    this.adj[to] = this.adj[to].filter(element => element != from)
  }
  ePonte(from, to){
   
    const ponte = this.arestas.find(element=>{
      return ((element.from == from && element.to == to) ||
             (element.from == to && element.to == from))
    })
    // console.log(`From: ${from} | To: ${to} | Ponte: ${ponte}`)
    // console.log(this.arestas)
    if(ponte){ponte.isPonte = true}
  } 
  draw(){
    this.arestas.forEach(element => {
      const from = this.nos[element.from]
      const to = this.nos[element.to]
      element.draw(from,to)
    })
    this.nos.forEach((element, index) => element.draw())
  }
  
  arestaJaExiste(from, to){
    var flag = false
    this.arestas.forEach(element => {
      if ((element.from == from && element.to == to) ||
          (element.to == from && element.from == to)){
        flag = true
      }
    })
    return flag
  }
  update(){
    if(mouseIsPressed){
      
    }else {
      this.no_selecionado = -1
    }
    this.nos.forEach(element => element.update())
  }
  generate_json(){
    console.log(JSON.stringify({
      nos: this.nos.map(element => {
        return {
          x: element.x, 
          y: element.y
        }
      }),
      arestas: this.arestas.map(element => {
        return {
          from: element.from, 
          to: element.to
        }
      })
    }))
  }
 
  selecionar_no(index){
    this.nos.forEach(element => {
      if (element.index == index) {
        element.selecionado = true
      }
    })
  }
  deselecionar_nos(){
    this.nos.forEach(element => element.selecionado = false)
  }
}
