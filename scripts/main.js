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
nodearray= []
edgearray= []

class node{
    constructor(){
        this.id = countnodes;
        countnodes++;
        this.edges= [];
    }
}

class edge{
    constructor(n1, n2, W, D){
        this.id = countedges;
        countedges++;
        this.weight = W;
        this.dir = D;//0= sin direccion, 1=1->2
        this.nodes = [n1, n2]
    }
}

function check(){
    if(!document.getElementById("add").checked){
        var nodes = document.getElementsByClassName("selected");
        nodes[0].classList.remove("selected");
    }
}

function createnode(){
    if(!document.getElementById("add").checked){
        count=countnodes;
        nodearray.push(new node());
        var btn = document.createElement("BUTTON"); 
        btn.innerHTML = count; 
        btn.id = count;
        btn.classList.add("node");
        document.body.appendChild(btn);
    }
}

  function createLine(x1, y1, x2, y2){
    var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
    var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    var transform = 'rotate('+angle+'deg)';
      var line = $('<div>')
        .appendTo('#page')
        .addClass('line')
        .css({
          'position': 'absolute',
          'transform': transform
        })
        .width(length)
        .offset({left: x1, top: y1});
        alert("here");
  
    return line;
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
    
    function addedge(){
        var nodes = document.getElementsByClassName("selected");
        var node1 = document.getElementById(nodes[0].id);
        var node2 = document.getElementById(nodes[1].id);
        createLine(node1.getBoundingClientRect().x, node1.getBoundingClientRect().y, node2.getBoundingClientRect().x, node2.getBoundingClientRect().y);
        alert(node1.getBoundingClientRect().x);
        node1.classList.remove("selected");
        node2.classList.remove("selected");
    }

    function startDragIfDraggable(evt) {
        if (evt.target.classList.contains('node')&&!document.getElementById("add").checked) {
            startDrag.call(evt.target, evt);
        }
        else if(evt.target.classList.contains('node')&&document.getElementById("add").checked) {
            if(evt.target.classList.contains('selected'))
                evt.target.classList.remove("selected");
            else
                evt.target.classList.add("selected");
            if(document.getElementsByClassName("selected").length==2)
                addedge();
        }
    }
    
    document.body.addEventListener('mousedown', startDragIfDraggable);

}(document));
