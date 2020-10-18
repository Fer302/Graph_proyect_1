class grafo {
    constructor(_numVertices) {
        {
            this.numVertices = _numVertices;
            this.MatrizAdy = [];
            this.MatrizBinaria = [];
            this.MatrizCam = [];
            this.Dirigido=[];
            for (var i = 0; i < this.numVertices; i++) {
                this.MatrizAdy[i] = new Array(this.numVertices);
                this.MatrizCam[i] = new Array(this.numVertices);
                this.MatrizBinaria[i] = new Array(this.numVertices);
                this.Dirigido[i]=new Array(this.numVertices);
            }
            for ( i = 0; i < this.numVertices; i++) {
                for (var j = 0; j < this.numVertices; j++) {
                    this.MatrizAdy[i][j] = 0;
                    this.MatrizCam[i][j] = 0;
                    this.MatrizBinaria[i][j] = 0;
                    this.Dirigido[i][j]=0;
                }
            }

        }



    }
    nueva_arista(v1, v2, peso) {
        if (v1 != v2) {
            this.MatrizBinaria[v1][v2] = 1;
            this.MatrizBinaria[v2][v1] = 1;
            this.MatrizAdy[v1][v2] = peso;
            this.MatrizAdy[v2][v1] = peso;
        }
    }
    borrar_arista(v1, v2) {
        this.MatrizAdy[v1][v2] = 0;
        this.MatrizAdy[v2][v1] = 0;
        this.MatrizBinaria[v1][v2] = 0;
        this.MatrizBinaria[v2][v1] = 0;
    }
    arista_dirigido(ver1,ver2,capacidad){
        this.Dirigido[ver1][ver2]=capacidad;
    }


    MatrizCamino() {
        for (var x = 0; x < this.numVertices; x++) {
            for (var y = 0; y < this.numVertices; y++) {
                this.MatrizCam[x][y] = this.MatrizBinaria[x][y];
            }
        }
        for (var k = 0; k < this.numVertices; k++) {
            for (var i = 0; i < this.numVertices; i++) {
                for (var j = 0; j < this.numVertices; j++) {
                    this.MatrizCam[i][j] = this.MatrizCam[i][j] || (this.MatrizCam[i][k] && this.MatrizCam[k][j]);
                }
            }
        }
    }
    EsConexo() {
        for(var i=0;i<this.numVertices;i++){
            for(var j=0;j<this.numVertices;j++){
                if(this.MatrizCam[i][j]==0){
                    return false;
                }
            }
        }
        return true;
    }

}

var maxInt = Number.MAX_SAFE_INTEGER;
function MinimumDistance(distance, shortestPathTreeSet, verticesCount) {
    var min = maxInt;
    var minIndex = 0;
    for (var v = 0; v < verticesCount; ++v) {
        if (shortestPathTreeSet[v] == false && distance[v] <= min) {
            min = distance[v];
            minIndex = v;
        }
    }
    return minIndex;
}

function Dijkstra(graph, source, verticesCount, t) {
    var distance = [];
    var shortestPathTreeSet = [];
    var parent = [];
    for (var i = 0; i < verticesCount; i++) {
        distance[i] = maxInt;
        shortestPathTreeSet[i] = false;
        parent[i] = -1;
    }
    distance[source] = 0;
    for (var count = 0; count < verticesCount - 1; ++count) {
        var u = MinimumDistance(distance, shortestPathTreeSet, verticesCount);
        shortestPathTreeSet[u] = true;
        for (var v = 0; v < verticesCount; ++v) {
            if (!shortestPathTreeSet[v] && graph[u][v] && distance[u] != maxInt && distance[u] + graph[u][v] < distance[v]) {
                distance[v] = distance[u] + graph[u][v];
                parent[v] = u;
            }
        }

    }
    console.log(parent[i]);

    return distance[t];

}


function findpath(graph, v) {
    var numadj = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for (var i = 0; i < v; i++) {
        numadj[i] = graph[i].reduce(reducer);

    }
    var startpoint = 0;
    var numofodd = 0;
    for ( i = v - 1; i >= 0; i--) {
        if (numadj[i] % 2 == 1) {
            numofodd++;
            startpoint = i;
        }
    }
    if (numofodd > 2) {

        return "No es Euleriano";
    }

    var path = [];
    var stack = [];
    var cur = startpoint;
    console.log(cur);
    while ((Array.isArray(stack) && stack.length) || graph[cur].reduce(reducer) != 0) {
        if (graph[cur].reduce(reducer) == 0) {
            path.push(cur);
            cur = stack.pop();

        }
        else {
            for ( i = 0; i < v; i++) {
                if (graph[cur][i] == 1) {
                    stack.push(cur);
                    graph[cur][i] = 0;
                    graph[i][cur] = 0;
                    cur = i;
                    break;
                }
            }
        }
    }
    var str = "si es euleriano, el camino es:"
    path.forEach(element => str = str + element + ">");
    str = str + cur;
    return str;
}





