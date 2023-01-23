async function main(){

    let margin = ({top: 20, right: 0, bottom: 30, left: 40})

    let width = 1152;

    let height = 500;

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
                    
                    _obj[_keysArray[_i]] = !isNaN(value)?parseFloat(value):value;
                })
                ObjectArray.push(_obj);
            })
            return ObjectArray;
        });
    }


    let data = await GetCSV("./alphabet.csv")
                .then((res)=>(res));

    console.log(data);
    
    let x = d3.scaleBand()
        .domain(data.map(d => d.letter))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1)

    let y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.frequency)])
        .range([height - margin.bottom, margin.top]) 


    const yTitle = g => g.append("text")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("y", 10)
        .text("↑ Frequency")
    
    const yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(null, "%"))
        .call(g => g.select(".domain").remove())

    const xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))

    // const svg = d3.select("svg")
    //     .attr("viewBox", [0, 0, width, height]);
    
    // svg.append("g")
    //     .attr("transform", `translate(0,${height - margin.bottom})`)
    //     .call(d3.axisBottom(x));
    
    // svg.append("g")
    //     .attr("transform", `translate(${margin.left},0)`)
    //     .call(d3.axisLeft(y));

    function createChart(){
        const svg = d3.select("#d3svgChar")
            .attr("viewBox", [0, 0, width, height]);
      
        svg.append("g")
            .attr("fill", "steelblue")
          .selectAll("rect")
          .data(data)
          .join("rect")
            .attr("x", d => x(d.letter))
            .attr("y", d => y(d.frequency))
            .attr("height", d => y(0) - y(d.frequency))
            .attr("width", x.bandwidth());
      
        svg.append("g")
            .call(xAxis);
      
        svg.append("g")
            .call(yAxis);
      
        svg.call(yTitle);
      
        return svg.html();
    }
    createChart();

    // let d3CSVChar = document.getElementById("d3svgAxes");
    // d3CSVChar.innerHTML = svg.html();
    return svg;
}

main();