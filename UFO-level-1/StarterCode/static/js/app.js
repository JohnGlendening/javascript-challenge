// from data.js
var tableData = data;

//select tbody, button, input tags
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");


//relate event with filter function
button.on("click", runFilter);
form.on("submit", runFilter);

function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    var inputValue = d3.select(".form-control").property("value");
    console.log(inputValue);

    tableData.forEach(obj => console.log(obj.datetime));


    //filter the user's input
    var filtedData = tableData.filter(obj => obj.datetime === inputValue);
    console.log(filtedData);

    //clear items
    tbody.html("");

    //fill in the final table
    filtedData.forEach(obj => {

        //append new table row and fill with values
        var row = tbody.append("tr");
        Object.entries(obj).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}