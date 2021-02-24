class Ponte {
  constructor() {
    
  }
  calcular(grafo){
    this.pontes = 0
    this.cont = 0
    this.pre = []
    this.low = []
    if(grafo.nos.length < 0 || grafo.arestas.length < 0){return}
    for (let v = 0; v < grafo.nos.length; v++) {
      this.low[v] = -1
      this.pre[v] = -1

    }
    for (let v = 0; v < grafo.nos.length; v++) {
      if (this.pre[v] == -1) {
        this.dfs(grafo, v, v)
      }
    }
  }
  dfs(grafo, u, v) {

    this.pre[v] = this.cont++;
    this.low[v] = this.pre[v];

    if(!grafo.adj[v]){return}
    for (let a of grafo.adj[v]) {
      let w = a
      if (this.pre[w] == -1) {
        this.dfs(grafo, v, w)
        
        this.low[v] = Math.min(this.low[v], this.low[w])
        
        if (this.low[w] == this.pre[w]) {
          grafo.ePonte(v,w)
        }
      } else if (w != u) {
        this.low[v] = Math.min(this.low[v], this.pre[w]);
      }
    }  
  }
  calcular_descritivo(grafo){
    this.pontes = 0
    this.cont = 0
    this.pre = new Array(grafo.nos.length)
    this.low = new Array(grafo.nos.length)
    if(grafo.nos.length < 0 || grafo.arestas.length < 0){return}
    for (let v = 0; v < grafo.nos.length; v++) {
      this.low[v] = -1
      this.pre[v] = -1
    }            
                                                         
    for (let v = 0; v < grafo.nos.length; v++) {
      if (this.pre[v] == -1) {
        this.dfs_descritivo(grafo, v, v)
      }
    }  
    alog('Pre: ', this.pre)
    alog('low: ', this.low)
  }
  dfs_descritivo(grafo, u, v){
    console.log('\n================')
    console.log('Chamando DFS')
   
    alog('low',this.low)
    alog('pre',this.pre)
    this.pre[v] = this.cont++;
    this.low[v] = this.pre[v];
    console.log(`U: ${u} | V: ${v} | pre[v]: ${this.pre[v]} | low[v]: ${this.low[v]}`)
    
    if(!grafo.adj[v]){return}
    console.log('Arestas Adjacentes: ',grafo.adj[v])
    for (let a of grafo.adj[v]) {
      console.log('Foi pra: ', a)
      let w = a
    
      if (this.pre[w] == -1) {
        console.log('\tNão havia sido visitado')
        this.dfs_descritivo(grafo, v, w)
        console.log('Voltou a chamada anterior')
        console.log(`${v}.low = Menor (${v}.low , ${w}.low)(${this.low[v]} , ${this.low[w]})`)

        this.low[v] = Math.min(this.low[v], this.low[w])
        
        if (this.low[w] == this.pre[w]) {
          console.log('this.low[w] é igual this.pre[w]')
          console.log(`${v} - ${w} é uma ponte`)
          grafo.ePonte(v,w)
     
        }
      } else if (w != u) {
        console.log('\tCaminho já visitado porem, diferente do que veio')
        console.log(`\tthis.low = Menor (this.low[v] , this.pre[w])(${this.low[v]} , ${this.pre[w]})`)
        this.low[v] = Math.min(this.low[v], this.pre[w]);
        console.log('\tthis.low[v] agora é', this.low[v])
      } else{
        console.log('\tCaminho já visitado\n')
      }
    }    
  }
  
}