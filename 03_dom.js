function main() {
    d3.select("p")
        .text("This is a paragraph") //text method
    d3.select("body").append("p") //append method
        .text("Yay! This is another paragraph")

    d3.select("#border").insert("p") // insert method
        .text("THIS IS A NEW PARAGRAPH!")

    d3.select("p").remove() //removes the first element

    d3.select("p").html("<spam>Spam!</spam>") // HTML method changes the value adding a HTML code

    d3.select("h1").attr("class", "error") // adds an attribute

    d3.select("input").property("checked", true) // adds properties

    d3.select("h1").classed("alert", true) // adds a class
}