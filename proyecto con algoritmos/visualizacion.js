function mostrarVisual(){
    d3.select('svg').remove();

    var width = 600, height = 400;
    var svg=d3.select('body').append('svg')
        .attr('width', width)
        .attr("style", "outline: thin solid black;") 
        .attr('height', height);
    var nodes = {};
    
    var auxTest=[];
    links.forEach(function(arista){
        var i=arista.source;
        var j=arista.target;
        var objetoNuevo={source:i,target:j};
        auxTest.push(objetoNuevo);
    });


    auxTest.forEach(function(elemento) {
        elemento.source = nodes[elemento.source] ||
            (nodes[elemento.source] = {name: elemento.source});
            elemento.target = nodes[elemento.target] ||
            (nodes[elemento.target] = {name: elemento.target});        
    });

    var force = d3.layout.force()
        .size([width, height])
        .nodes(d3.values(nodes))
        .links(auxTest)
        .on("tick", tick)
        .linkDistance(300)
        .start();

    var link = svg.selectAll('.link')
        .data(auxTest)
        .enter().append('line')
        .attr('class', 'link'); 


    var node = svg.selectAll('.node')
        .data(force.nodes())
        .enter().append('circle')
        .attr('class', 'node')
        .attr('r', width * 0.03);
   

    function tick() {
        
        node.attr('cx', function(d) { return d.x; })
            .attr('cy', function(d) { return d.y; })
            .call(force.drag);
            
        link.attr('x1', function(d) { return d.source.x; })
            .attr('y1', function(d) { return d.source.y; })
            .attr('x2', function(d) { return d.target.x; })
            .attr('y2', function(d) { return d.target.y; });
        
    }
}
