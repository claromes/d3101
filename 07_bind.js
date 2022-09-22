function main() {
    // 1
    // const mySong = ["Welcome to the soldier side", "where there's no one here but me", "SOAD"]
    // const myData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // d3.select("body")
    //     .selectAll("span")
    //     .data(myData)
    //     .enter() // dynamically create placeholders
    //     .append("span")
    //     .style("color", function(d) {
    //         if (d%3 === 0) {
    //             return "red"
    //         } else {
    //             return "blue"
    //         }
    //     })
    //     .text(function(d) {
    //         return `${d} `
    //     })

    // 2
    // const matrix = [
    //     [1, 2, 3, 4, 5],
    //     [6, 7, 8, 9, 10],
    //     [11, 12, 13, 14, 15],
    //     [16, 17, 18, 19, 20]
    // ]

    // const tr = d3.select("body")
    //                 .append("table")
    //                 .selectAll("tr")
    //                 .data(matrix)
    //                 .enter()
    //                 .append("tr")

    // const td = tr.selectAll("td")
    //             .data(function(d) {
    //                 return d
    //             })
    //             .enter()
    //             .append("td")
    //             .style("background-color", function(d) {
    //                 if (d%2 === 0) {
    //                     return "pink"
    //                 } else {
    //                     return "orange"
    //                 }
    //             })
    //             .text(function(d) {
    //                 return d
    //             })

    // 3
    // const myQuote = ["Welcome to the soldier side"]
    // d3.select("body")
    //     .selectAll("p")
    //     .data(myQuote)
    //     .text(function(d) {
    //         return d
    //     })
    //     .exit()
    //     .remove()

    //4
    d3.select("body")
        .select("p")
        .datum(9000) //static data
        .text(function(d, i) {
            return `Power is over ${d}`
        })
}