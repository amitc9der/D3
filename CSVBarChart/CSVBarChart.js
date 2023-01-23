async function main(){
    async function GetCSV(_url){
        return await fetch(_url)
        .then((response)=>(response.text()))
        .then((res)=>(res.split('\n')))
        .then((resArr)=>{
            let ObjectArray = [];
            let _keysArray= resArr[0].split(",");
            resArr.shift();
            resArr.map((item,index)=>{
                let _obj = {}
                item.split(",").map((value,_i)=>{
                    
                    _obj[_keysArray[_i]] = !isNaN(value)?parseInt(value):value;
                })
                ObjectArray.push(_obj);
            })
            return ObjectArray;
        });
    }
    let width = 420;

    let data = await GetCSV("./numbers.csv")
                .then((res)=>(res));

    let x = d3.scaleLinear()
        .domain([0, d3.max(data, d =>{
                console.log(data,d);
                return d.value
            })
        ])
        .range([0, width])

    let y = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, 20 * data.length])  

    const svg = d3.select("#d3svg")
        .attr("width", width)
        .attr("height", y.range()[1])
        .attr("font-family", "sans-serif")
        .attr("font-size", "10")
        .attr("text-anchor", "end");
  
    const bar = svg.selectAll("g")
        .data(data)
        .join("g")
        .attr("transform", d => `translate(0,${y(d.name)})`);
  
    bar.append("rect")
        .attr("fill", "steelblue")
        .attr("width", d => x(d.value))
        .attr("height", y.bandwidth() - 1);
  
    bar.append("text")
        .attr("fill", "white")
        .attr("x", d => x(d.value) - 3)
        .attr("y", (y.bandwidth() - 1) / 2)
        .attr("dy", "0.35em")
        .text(d => d.value);
  
    // return svg.node();
    let d3CSVChar = document.getElementById("d3svg");
    d3CSVChar.innerHTML = svg.html();
    return svg;
}

main();