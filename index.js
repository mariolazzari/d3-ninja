const canvas = d3.select(".canvas");

const svg = canvas
  .append("svg")
  .attr("height", 600)
  .attr("width", 600);

const group = svg.append("g").attr("transform", "translate(0, 100)");

// append rectangle to svg
group
  .append("rect")
  .attr("height", 100)
  .attr("width", 200)
  .attr("fill", "blue")
  .attr("x", 20)
  .attr("y", 20);
// add circle
group
  .append("circle")
  .attr("r", 50)
  .attr("cx", 300)
  .attr("cy", 70)
  .attr("fill", "pink");
// add line
group
  .append("line")
  .attr("x1", 370)
  .attr("x2", 400)
  .attr("y1", 20)
  .attr("y2", 120)
  .attr("stroke", "red");
// append text
svg
  .append("text")
  .attr("x", 20)
  .attr("y", 200)
  .attr("fill", "grey")
  .text("Ciao Mario")
  .style("font-family", "arial");
