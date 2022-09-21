function main() {
    d3.selectAll("div")
        .on("mouseover", function() {
            d3.select(this)
                .style("background-color", "yellow")
        })
        .on("mouseout", function() {
            d3.select(this)
                .style("background-color", "navy")
        })
}