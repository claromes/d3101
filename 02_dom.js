function main() {
    d3.select("p").style("color", "red") //first one
    //d3.select("#p2").style("color", "green") //with p2 id
    d3.selectAll("p").style("font-size", "50px")
    d3.select(".color").style("color", "gray")

    d3.select("tr").selectAll("td").style("background-color", "firebrick") //nested selection
}