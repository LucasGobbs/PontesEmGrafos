class InputWrapper{
    constructor(){
      this.no_selecionado = null
      
      this.double_click = false
      this.isPressed = false
      
      this.aresta_buffer = null
    }
    update(){
      this.maybe_reset()
     
      if(keyIsPressed && keyCode == 65){
        if(!this.aresta_buffer){
          this.aresta_buffer =this.getMaiorNo()
          if(this.aresta_buffer){
            this.aresta_buffer.selecionado_aresta = true
          }
          
        }else{
          const to_no = this.getMaiorNo()
          if(to_no){
            if (to_no != this.aresta_buffer){
  
              grafo.addAresta(this.aresta_buffer.index, to_no.index)
              this.aresta_buffer.selecionado_aresta = false
              this.aresta_buffer = null
            }
          }else{
            this.aresta_buffer.selecionado_aresta = false
            this.aresta_buffer = null
          }
        }
      }
      if(this.no_selecionado){
        this.no_selecionado.x = mouseX
        this.no_selecionado.y = mouseY
      }else{
        if(mouseIsPressed){
          this.no_selecionado = this.getMaiorNo()
        }
      } 
    }
    draw(){
      if(this.aresta_buffer){
        stroke(255,255,0)
        line(this.aresta_buffer.x, this.aresta_buffer.y,mouseX,mouseY)
      }
    }
    getMaiorNo(){
      const mouse = createVector(mouseX, mouseY)
        const nos = this.getNosPertoDoMouse(mouse)
        if(nos.length > 0){
          const maior_no = nos
            .reduce(function (p, v) {
              return ( p.index > v.index ? p : v );
            });
          maior_no.overSize = 10
          return maior_no
        }
      return null
    }
    getNosPertoDoMouse(mouse){
      return grafo.nos.filter(element => mouse.dist(createVector(element.x,element.y)) <= element.size/2)
    }
    maybe_reset(){
      if(!mouseIsPressed){this.no_selecionado = null}
    }
  }
  
  function mouseClicked() {
    //grafo.addNo(mouseX,mouseY)
    
      
  
  }
  function doubleClicked() {
   const nos_perto_do_mouse = 
          grafo.nos.filter(element => element.overSize  > 0)
    
    if(nos_perto_do_mouse.length > 0){
      const no_com_maior_indice = nos_perto_do_mouse
      .reduce(function (p, v) {
        return ( p.index > v.index ? p : v );
      });
      no_com_maior_indice.selecionado = !no_com_maior_indice.selecionado
    } else{
      grafo.addNo(mouseX,mouseY)
    }
  }
  function mouseDragged() {
    
  }