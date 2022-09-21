function main() {
    // using variables
    //const bodyElem = d3.select("body")
    //const para = bodyElem.append("p")

    //para.text("Let's code!")

    // using chaining method & function of data
    const dataArr = [6, 5, 4, 3, 2, 1, 0]

    //d3.select("body")
    //    .selectAll("p")
    //    .data(dataArr)
    //    .text(function(d, i) {
    //        console.log(`d: ${d}`)
    //        console.log(`i: ${i}`)
    //        return d
    //    })

    d3.select("body")
        .selectAll("p")
        .style("background", function(d, i) {
            const text = this.innerText

            if (text.indexOf("Warning") >= 0) {
                return "orange"
            } else if (text.indexOf("Danger") >= 0) {
                return "red"
            }
        })
}