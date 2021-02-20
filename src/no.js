class No{
  constructor(x,y){
    this.x = x
    this.y = y
    this.size = 25
    this.overSize = 0
  }
  draw(index){
    stroke(0)
    fill(255,0,0)
    circle(this.x,this.y,this.size + this.overSize)
    
    textSize(20);
    fill(255)
    text(`${index}`, this.x - 5, this.y + 5)
  }
  update(){
    const mouse = createVector(mouseX, mouseY)
    const pos = createVector(this.x, this.y)
    if(mouse.dist(pos) <= this.size){
      this.overSize = 10
      if(mouseIsPressed){
        this.x = mouseX
        this.y = mouseY
      }
    } else {
      this.overSize = 0
    }
    //console.log(this.overSize)
  }
}