function main() {
    // d3.select("#container")
    //     .transition().duration(2000)
    //     .style("background-color", "red")
    //     .transition().duration(2000)
    //     .style("background-color", "yellow")

    // const t = d3.transition().duration(2000)
    // d3.select("#container")
    //     .transition(t)
    //     .style("background-color", "yellow")
    //     .transition(t)
    //     .style("background-color", "red")

    const svg = d3.select("body")
                    .append("svg")
                    .attr("width", 500)
                    .attr("height", 500)

    const bar1 = svg.append("rect")
                    .attr("fill", "navy")
                    .attr("x", 100)
                    .attr("y", 20)
                    .attr("width", 20)
                    .attr("height", 10)

    const bar2 = svg.append("rect")
                    .attr("fill", "navy")
                    .attr("x", 140)
                    .attr("y", 20)
                    .attr("width", 20)
                    .attr("height", 10)

    update()

    function update() {
        bar1.transition()
            .ease(d3.easeBounce)
            .duration(2000)
            .attr("height", 100)
        bar2.transition()
            .ease(d3.easeBounce)
            .duration(2000)
            .delay(2000)
            .attr("height", 100)
    }
}