
  function fn2() {
    var v1 = parseInt(document.getElementById("text2").value);
    var v2 = parseInt(document.getElementById("text3").value);
    var peso = parseInt(document.getElementById("text4").value);
    gr.nueva_arista(v1, v2, peso);
    var temp={source:v1,target:v2};
    links.push(temp);
    fn3();
    mostrarVisual();
  }
  function fn4() {
    gr.MatrizCamino();
    if (gr.EsConexo() == true) {
      document.getElementById("demo").innerHTML = " Es un grafo Conexo";
    }
    else {
      document.getElementById("demo").innerHTML = " No es conexo";
    }
  }
  function borrar() {
    var b1 = parseInt(document.getElementById("text2").value);
    var b2 = parseInt(document.getElementById("text3").value);
    gr.borrar_arista(b1, b2);
    fn3();
  }
  function DijkstraFinal() {
    var n1 = parseInt(document.getElementById("textInicio").value);
    var n2 = parseInt(document.getElementById("textTermino").value);
    var dist = Dijkstra(gr.MatrizAdy, n1, gr.numVertices, n2);
    document.getElementById("demo2").innerHTML = dist;

  }
  function eulerianoFinal() {
    var MatrizAux = [];
    for (var r = 0; r < gr.numVertices; r++) {
      MatrizAux[r] = new Array(gr.numVertices);
    }
    for (var x = 0; x < gr.numVertices; x++) {
      for (var y = 0; y < gr.numVertices; y++) {
        MatrizAux[x][y] = gr.MatrizBinaria[x][y];
      }
    }
    var CaminoEuler = findpath(MatrizAux,gr.numVertices);
    document.getElementById("demoEuler").innerHTML = CaminoEuler;
  }
  function AgregarDirigido(){
    var v1 = parseInt(document.getElementById("Vertice1D").value);
    var v2 = parseInt(document.getElementById("Vertice2D").value);
    var peso = parseInt(document.getElementById("PesoD").value);
    gr.arista_dirigido(v1,v2,peso);
    mostrarDirigido();
    console.log(gr.Dirigido[v1][v2]);

  }
  function flujoMaximo(){
    var tempS = parseInt(document.getElementById("nSource").value);
    var tempT = parseInt(document.getElementById("nTarget").value);
    var flujoTemp=fordFulkerson(gr.Dirigido,tempS,tempT,gr.numVertices);
    document.getElementById("demoFlujo").innerHTML = 'El flujo maximo es '+ flujoTemp;
  }
  function arbolFinal(){
      
      var tempString=Prim(gr.MatrizAdy,gr.numVertices);
      document.getElementById("demoArbol").innerHTML ="Las aristas del arbol son: "+ tempString;
  }