class No{
  constructor(index, x, y){
    this.index = index
    this.x = x
    this.y = y
    this.size = 65
    this.overSize = 0
    this.selecionado = false
    this.selecionado_aresta = false
  }
  draw(){
    strokeWeight(3)

    this.selecionado_aresta ? stroke(255,255,0) : stroke(0)
    this.selecionado ? fill(255,255,0) : fill(255,0,0)
    circle(this.x,this.y,this.size + this.overSize)
    
    stroke(0)
    textSize(35);
    fill(255)
    text(`${this.index}`, this.x , this.y + 12)
  }
  update(){
    

    this.overSize = 0
    //console.log(this.overSize)
  }
}