function main(){
    function GetData(){
        var data = [

        ]
        for (let i =0;i<Math.random()*10+10;i++){
            data.push({
                x:Math.floor(Math.random()*400),
                y:Math.floor(Math.random()*400),
            })
        }
        return data;
    }
    var data = GetData();
    var svg = d3.select("body").append("svg")
        .attr("id","#theTravelingSalesManProblem")
        .attr("width",700)
        .attr("height",700)
        .attr("transform", "translate(" + (window.innerWidth - 500) / 2 + "," + (window.innerHeight - 500) / 2 + ")");
    var city = svg.selectAll("rect")
                .data(data)
                .join("rect")
                .attr("width","10")
                .attr("height","10");


    city.attr("x",function(d){return d.x})
        .attr("y",function(d){return d.y})
        .style("fill","rgb(5 0 255")


    function DrawLineBtwEachPoint(_svg,_data){
        var line = d3.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; });

        _svg.append("path")
            .datum(data)
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "black");
    };



    // Find Path ------>

    function FindPath(_svg,_Data){
        let path = _Data;
        let cityMap = [];

        class CityPoint {
            constructor(index,checked,x,y,city) {
                this.x = x;
                this.y = y;
                this.index=index;
                this.checked=checked;
                this.city=city.filter((d,i) => i === index)
            }

            createCircleAround(){
                // let svg = d3.select("#theTravelingSalesManProblem");
                let circle = svg.append("circle")
                    .style("stroke", "gray")
                    .style("fill", "black")
                    .attr("r", 10)
                    .attr("cx",this.x)
                    .attr("cy", this.y);
            }

        }
        path.map((_c,_index)=>{
            let _obj = new CityPoint(_index,false,_c.x,_c.y,svg);
            cityMap.push(_obj);
            cityMap[_index].createCircleAround();
        })


        console.log(cityMap);
        DrawLineBtwEachPoint(_svg,path.sort());

    }

    FindPath(svg,data);


    return svg.node();
}
main();