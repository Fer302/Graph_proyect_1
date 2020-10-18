function minKey(key,set,verticescount){
    var min=9999;
    var minIndex=0;
    for(var v=0;v<verticescount;v++){
        if(set[v]==false && key[v]<min){
            min=key[v];
            minIndex=v;
        }
    }
    return minIndex
}

function Prim(graph,verticescount){
    var parent = [];
        var key = [];
        var mstSet = [];
        var u;
        for (var i = 0; i < verticescount; i++) {
            key[i] = 9999;
            mstSet[i] = false;
        }
        key[0] = 0;
        parent[0] = -1;
        for (var count = 0; count < verticescount - 1; count++) {
            u = minKey(key, mstSet, verticescount);
            mstSet[u] = true;

            for (var v = 0; v < verticescount; v++) {
                if (graph[u][v] && mstSet[v] == false && graph[u][v] < key[v]) {
                    parent[v] = u;
                    key[v] = graph[u][v];
                }
            }
        }
        var tempString="";
        for ( i = 1; i < verticescount; i++) {
            console.log(parent[i] + " - " + i + "\n");
            tempString=tempString + parent[i] + "-" + i +";";
        }
        return tempString;

    }