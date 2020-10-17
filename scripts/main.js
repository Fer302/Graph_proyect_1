/*class grafo{
    constructor(_numVertices)
 {
    {
        this.numVertices=_numVertices;
        this.MatrizAdy=[];
        this.MatrizBinaria=[];
        this.MatrizCam=[];
        for(var i=0;i<this.numVertices;i++)
          {
            this.MatrizAdy[i]=new Array(this.numVertices);
            this.MatrizCam[i]=new Array(this.numVertices);
            this.MatrizBinaria[i]=new Array(this.numVertices);
          }
        for(var i=0;i<this.numVertices;i++){
         for(var j=0;j<this.numVertices;j++){
             this.MatrizAdy[i][j]=0;
             this.MatrizCam[i][j]=0;
             this.MatrizBinaria[i][j]=0;
         } 
        }
          
    }
    
    
    
}
nueva_arista(v1,v2,peso){
   if(v1!=v2){
       this.MatrizBinaria[v1][v2]=1;
       this.MatrizBinaria[v2][v1]=1;
       this.MatrizAdy[v1][v2]=peso;
       this.MatrizAdy[v2][v1]=peso;
   }
}
borrar_arista(v1,v2){
    this.MatrizAdy[v1][v2]=0;
    this.MatrizAdy[v2][v1]=0;
    this.MatrizBinaria[v1][v2]=0;
    this.MatrizBinaria[v2][v1]=0;
}



MatrizCamino(){
this.MatrizCam=this.MatrizBinaria;
for(var k=0;k<this.numVertices;k++){
    for(var i=0;i<this.numVertices;i++){
        for(var j=0;j<this.numVertices;j++){
            this.MatrizCam[i][j]=this.MatrizCam[i][j]||(this.MatrizCam[i][k] && this.MatrizCam[k][j]);
         }
      }
   }
}

}*/
var countnodes = 0
var countedges = 0
var draggable = document.getElementsByClassName("node"),
        draggableCount = draggable.length, 
        i;

class node{
    constructor(){
        this.id = countnodes;
        countnodes++;
        this.edges[NULL];
    }
    funcion (document) {
        this.draggable()
    }
}

class edge{
    constructor(n1, n2, W, D){
        this.id = countedges;
        countedges++;
        this.weight = W;
        this.dir = D;//NULL= sin direccion, 0=1->2, 1=2->1
        this.nodes = [n1, n2]
    }
}

function createnode(){
    var btn = document.createElement("BUTTON"); 
    btn.innerHTML = 'O'; 
    btn.classList.add("node");
    document.body.appendChild(btn);
    draggable = document.getElementsByClassName("node"),
        draggableCount = draggable.length, 
        i;
}

(function (document) {
    'use strict';
    
    function startDrag(evt) {
       
        var diffX = evt.clientX - this.offsetLeft,
            diffY = evt.clientY - this.offsetTop,
            that = this; 
        
        function moveAlong(evt) {
            that.style.left = (evt.clientX - diffX) + 'px';
            that.style.top = (evt.clientY - diffY) + 'px';
        }
        
        function stopDrag() {
            document.removeEventListener('mousemove', moveAlong);
            document.removeEventListener('mouseup', stopDrag);
        }
        
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('mousemove', moveAlong);
    }
    
    for (i = 0; i < draggableCount; i += 1) {
        draggable[i].addEventListener('mousedown', startDrag);
    }

}(document));