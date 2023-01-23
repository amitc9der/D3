function main(){
    let circle = d3.selectAll("circle");
    circle.style("fill", "steelblue");
    circle.attr("r", 30);

    function RandomPosition(){
        circle.attr("cx", function() { return Math.random() * 220; });
        setTimeout(RandomPosition,2000)
    }
    // RandomPosition();
    function RadiusOfCircle(){
        circle.data([35,57,112])
        circle.attr("r", function(d) { return Math.sqrt(d); });
    }
    // RadiusOfCircle();

    function EnteringElements(){
        var svg = d3.select("div");
        var circle = svg.selectAll("circle")
        .data([32, 57, 112, 293]);
        var circleEnter = circle.enter().append("circle");
        circleEnter.attr("cy", 60)
        circleEnter.attr("cx", function(d, i) { return i * 100 + 30; })
        circleEnter.attr("r", function(d) { return Math.sqrt(d); })
        circleEnter.style("fill", "steelblue");
    }
    EnteringElements();
}

main();