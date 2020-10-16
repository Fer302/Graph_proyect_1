class grafo{
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

}