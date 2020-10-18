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
var weight = 0

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

var nodearray= []
var edgearray= []
var first

function check(){
    if(!document.getElementById("add").checked){
        var nodes = document.getElementsByClassName("selected");
        nodes[0].classList.remove("selected");
    }
}

function update(){
    weight = document.getElementById("num").value;
    if(weight.length == 0){
        weight = 0;
    }
    if(weight<0){
        weight *= -1;
    }
    document.getElementById("w").innerHTML = "Weight = " +weight;
}

function showedges(){
    document.getElementById("owtheedge").innerHTML = null;
    var i;
    var arrow;
    var cap = edgearray.length;
    for(i=0; i<cap; i++){
        if(edgearray[i].dir)
            arrow = " --> ";
        else
            arrow = " -- ";
        document.getElementById("owtheedge").innerHTML +=
            edgearray[i].nodes[0] + arrow + edgearray[i].nodes[1] + " (" + edgearray[i].weight + ")       ";
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
        var node1 = document.getElementById(first.id);
        var node2 = document.getElementById(nodes[0].id);
        if(node1 == node2)
            node2 = document.getElementById(nodes[1].id)
        var dir = false;
        if(document.getElementById("dir").checked)
            dir = true;
        edgearray.push(new edge(node1.id, node2.id, 0, dir));
        showedges();
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
            else
                first = document.getElementsByClassName("selected")[0];
        }
    }
    
    document.body.addEventListener('mousedown', startDragIfDraggable);

}(document));