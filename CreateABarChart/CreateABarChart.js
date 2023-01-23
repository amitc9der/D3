// var paragraphs = document.getElementsByTagName("p");
// for (var i = 0; i < paragraphs.length; i++) {
//   var paragraph = paragraphs.item(i);
//   paragraph.style.setProperty("color", "blue", null);
// }


d3.selectAll("p").style("color", "blue");
// d3.select("body").style("background-color", "black");

function RandomColorP(){
    d3.selectAll("p").style("color", function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
    });
    setTimeout(RandomColorP,2000);
    return null;
}
// RandomColorP();

// d3.selectAll("p").style("color", function(d, i) {
//   return i % 2 ? "#fff" : "#eee";
// });

// d3.selectAll("p")
//   .data([42, 30, 20, 26, 23, 42])
//     .style("font-size", function(d) { return d + "px"; });
    
// d3.select("body")
//   .selectAll("p")
//   .data([4, 8, 15, 16, 23, 42])
//   .enter().append("p")
//     .text(function(d) { return "I’m number " + d + "!"; });

// // Update…
// var p = d3.select("body")
//   .selectAll("p")
//   .data([4, 8, 15, 16, 23, 42])
//     .text(function(d) { return d; });

// // Enter…
// p.enter().append("p")
//     .text(function(d) { return d; });

// // Exit…
// p.exit().remove();

// d3.select("body").transition()
//     .style("background-color", "black");

// d3.selectAll("circle").transition()
// .duration(750)
// .delay(function(d, i) { return i * 10; })
// .attr("r", function(d) { return Math.sqrt(d * scale); });



// data = [20,10,15,19,11,9]

// function SelectAllP(){
//     const p = d3.selectAll("p");
//   // p.style("color", "red"); // Uncomment this line and run the code!
//   // p.style("color", null); // Uncomment this line to clear the color.
//   return p;
// }

// console.log(SelectAllP()._groups[0]);

function CreateDivD3(){
  const div = d3.create("div");
  div.html("Hello, world!");
  return div;
}

const helloWorldDiv = document.getElementById("helloWorld");
const divhelloWorld = CreateDivD3();
helloWorldDiv.innerHTML = divhelloWorld.html();

// const d3Table = document.getElementById("d3Table");
// function CreateD3Table(){
//     const table = d3.select("d3Table");
//     const tbody = table.append("tbody");
//     tbody.append("tr").append("td").text("First!");
//     tbody.append("tr").append("td").text("Second.");
//     tbody.append("tr").append("td").text("Third.");
//     return table;
// }
// d3Table.innerHTML = CreateD3Table().html();



const d3Chart = document.getElementById("d3Chart");
data = [1,10,42,20,32,29]
function CreateBarChart(){
  const div = d3.select("#d3Chart")
      .style("font", "10px sans-serif")
      .style("text-align", "right")
      .style("color", "white");

  div.selectAll("div")
    .data(data.sort())
    .join("div")
      .style("background", "steelblue")
      .style("padding", "3px")
      .style("margin", "1px")
      .style("width", d => `${d * 10}px`)
      .text(d => d);

  return div;
}
d3Chart.innerHTML=CreateBarChart().html();

const d3CharScale = document.getElementById("d3ChartScale");
x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 210])
//Scale is 10 Which I think means 1 data value equal to 10 pixel.----->
function CreateBarChartScalling(){
  const div = d3.select("#d3ChartScale")
      .style("font", "10px sans-serif")
      .style("text-align", "right")
      .style("color", "white");

  div.selectAll("div")
    .data(data)
    .join("div")
      .style("background", "steelblue")
      .style("padding", "3px")
      .style("margin", "1px")
      .style("width", d => `${x(d)}px`)
      .text(d => d);

  return div;
}

d3CharScale.innerHTML=CreateBarChartScalling().html();




