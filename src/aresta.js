class Aresta{
  constructor(from, to){
    this.from = from
    this.to = to
    this.isPonte = false
  }
  log(){
    console.log(`Aresta: ${this.from} - ${this.to}`)
  }
  draw(a,b){
    this.isPonte? stroke(0,255,0) : stroke(255,0,0);
    strokeWeight(2)
    line(a.x,a.y,b.x,b.y)
  }

}