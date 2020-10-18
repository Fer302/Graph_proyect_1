function bfs(rGraph,s,t,parent,nv){
    var visited=[];
    for(var i=0;i<nv;i++){
        visited[i]=false;
    }
    q=[];
    q.push(s);
    visited[s]=true;
    parent[s]=-1;
    while(Array.isArray(q) && q.length){
        var u=q.shift();
        for(var v=0;v<nv;v++){
            if(visited[v]==false && rGraph[u][v]>0){
                q.push(v);
                parent[v]=u;
                visited[v]=true;
            }
        }
    }
    return (visited[t]==true);
}
function fordFulkerson(graph,s,t,nv){
    var rGraph=[];
    for( var k=0;k<nv;k++){
        rGraph[k]=new Array(nv);
    }
    for(var i=0;i<nv;i++){
        for(var j=0;j<nv;j++){
            rGraph[i][j]=graph[i][j];
        }
    }
    var parent=[];
    var max_flow=0;
    var u;
    
    while(bfs(rGraph,s,t,parent,nv)){
        var path_flow=99999;
        for(var v=t;v!=s;v=parent[v]){
            u=parent[v];
            path_flow=Math.min(path_flow,rGraph[u][v]);
        }
        for(var v=t; v!=s;v=parent[v]){
            u=parent[v];
            rGraph[u][v]-=path_flow;
            rGraph[v][u]+=path_flow;
        }
        max_flow+=path_flow;
    }
    return max_flow;
}
