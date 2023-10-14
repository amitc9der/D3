function main(){
    function CreateData(){
        return [
            {
                "x":Math.random() *10.0+30,
                "y":Math.random() *10.1+30,
                "color":"#FEDEFF"
            },
            {
                "x":Math.random() *20.3+30,
                "y":Math.random() *20.2+30,
                "color":"#B6EADA"
            },
            {
                "x":Math.random() *30.2+30,
                "y":Math.random() *30.5+30,
                "color":"#86A3B8"
            },
            {
                "x":Math.random() *40.0+30,
                "y":Math.random() *40.1+30,
                "color":"#1F8A70"
            },
            {
                "x":Math.random() *20.3+30,
                "y":Math.random() *20.2+30,
                "color":"#B6EADA"
            },
            {
                "x":Math.random() *30.2+30,
                "y":Math.random() *30.5+30,
                "color":"#86A3B8"
            },
            {
                "x":Math.random() *40.0+30,
                "y":Math.random() *40.1+30,
                "color":"#1F8A70"
            },
            {
                "x":Math.random() *20.3+30,
                "y":Math.random() *20.2+30,
                "color":"#B6EADA"
            },
            {
                "x":Math.random() *30.2+30,
                "y":Math.random() *30.5+30,
                "color":"#86A3B8"
            },
            {
                "x":Math.random() *40.0+30,
                "y":Math.random() *40.1+30,
                "color":"#1F8A70"
            },
            {
                "x":Math.random() *20.3+30,
                "y":Math.random() *20.2+30,
                "color":"#B6EADA"
            },
            {
                "x":Math.random() *30.2+30,
                "y":Math.random() *30.5+30,
                "color":"#86A3B8"
            },
            {
                "x":Math.random() *40.0+30,
                "y":Math.random() *40.1+30,
                "color":"#1F8A70"
            },
            {
                "x":Math.random() *20.3+30,
                "y":Math.random() *20.2+30,
                "color":"#B6EADA"
            },
            {
                "x":Math.random() *30.2+30,
                "y":Math.random() *30.5+30,
                "color":"#86A3B8"
            },
            {
                "x":Math.random() *40.0+30,
                "y":Math.random() *40.1+30,
                "color":"#1F8A70"
            }
            
        ]
    }
    let data = CreateData();
    let svg = d3.select("#ThinkingWithJoins")

    function SelectAllCircles(_svg,_data){
        return _svg.selectAll("circle")
                .data(_data);
    }
    let circle = SelectAllCircles(svg,data);

    function ClearCircles() {
        circle.exit().remove();        
    }
    ClearCircles();
    

    function UpdateCircles(_circles) {
        _circles.enter().append("circle")
                .merge(circle)
                .style("fill",function(d){return "hsl(" + Math.random() *(Math.random()* (500-Math.random()*500)) + ",100%,50%)"})
                .attr("cx", function(d) { return d.x+10; })
                .attr("cy", function(d) { return d.y+10; })
                .attr("r", 4);
        
        return null;
    };
    UpdateCircles(circle);
    setTimeout(main,300);
}

main();