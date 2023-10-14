function main(){
    function SelectAllCircles() {
        let svg = d3.select("#d3SvgCircleSelectAll")
        let circle =svg.selectAll("circle");
        circle.style("fill", "steelblue");
        circle.attr("r", 30);
    }
    SelectAllCircles();

    function RandomPositionCircles() {
        let svg = d3.select("#d3SvgRandomPositionCircleAll")
        let circle =svg.selectAll("circle");
        circle.style("fill", "steelblue");
        circle.attr("r", function() { return Math.random() * 30; });   
        circle.attr("cx", function() { return Math.random() * 720; });
        setTimeout(RandomPositionCircles,1000);
    }
    RandomPositionCircles();

    function BindingDataD3SVG(){
        let svg = d3.select("#d3BindingData")
        let circle = svg.selectAll("circle");
        circle.data([32, 57, 112]);
        circle.attr("r", function(d) { return Math.sqrt(d); });
        circle.attr("cx", function(d, i) { return i * 100 + 30; });
        circle.style("fill", "steelblue");
    }    
    BindingDataD3SVG();

    function EnteringElement(){
        let svg = d3.select("#d3EntringElements");
        let circle = svg.selectAll("circle")
        .data([32, 57, 112, 293])
        .enter().append("circle")
        .style("fill", "steelblue")
        .attr("cy", 60)
        .attr("cx", function(d, i) { return i * 100 + 30; })
        .attr("r", function(d) { return Math.sqrt(d); });
        return circle.node();
    }
    EnteringElement();

    function RemoveElements(){
        let svg = d3.select("#d3RemoveElements");

        let circle = svg.selectAll("circle")
            .data([32, 57]);

        circle.exit().remove();
        return circle.node();
    }
    RemoveElements();

    function AllTogether(){
        let svg = d3.select("#d3AllTogether");

        let circle = svg.selectAll("circle")
            .data([32, 57, 293], function(d) { return d; });

        circle.enter().append("circle")
            .attr("cy", 60)
            .attr("cx", function(d, i) { return i * 100 + 30; })
            .style("fill", "steelblue")
            .attr("r", function(d) { return Math.sqrt(d); });

        circle.exit().remove();
    }
    AllTogether();
}

main();