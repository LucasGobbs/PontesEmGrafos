class Ponte {
  constructor(grafo) {
    this.pontes = 0
    this.cont = 0

    this.pre = []
    this.low = []

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
  componentes() {
    return this.pontes + 1
  }
  dfs(grafo, u, v) {
    this.pre[v] = this.cont++;
    this.low[v] = this.pre[v];

    for (let a of grafo.adj[v]) {
      let w = a
      if (this.pre[w] == -1) {
        this.dfs(grafo, v, w)
        this.low[v] = Math.min(this.low[v], this.low[w])
        if (this.low[w] == this.pre[w]) {
          this.pontes++
          grafo.ePonte(v,w)
        }
      } else if (w != u) {
        this.low[v] = Math.min(this.low[v], this.pre[w]);
      }
    }
  }
}