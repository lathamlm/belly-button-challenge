// URL TO JSON
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// d3 TO READ IN/CONSOLE LOG JSON
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);


// PULL DATA
d3.json(url).then(function(data){
    
    // LIST OF NAMES TO GO INTO DROPDOWN
    let namesList = data.names
    // need to figure out how to get this into dropdown
    
    // ADD IN HERE DROPDONW CLICK INFORMATION


    // DEMOGRAPHIC INFORMATION
    // REFERENCED HTMLCHEATSHEET.COM/JS/
    for(let i=0, l=data.metadata.length; i<l; i++) {
        if (data.metadata[i].id == this) {

        }
    }
 
    sampleData = data.samples;

    console.log("Test: ", data.metadata[0].id);
    console.log("names: ", data.names);

    /*let trace1 = {
        x: data.map(person => person.samples.sample_values),
        y: data.map(person => person.samples.otu_ids),
        label: data.map(person => person.samples.otu_labels),
        type: 'bar',
        orientation: 'h'
     };
     
     data = [trace1]
     Plotly.newPlot("plot", trace1)*/
})


/* d3.selectAll("#selDataset").on("change", updatePlotly),
// what to do when the dropdown menu is selected
function updatePlotly() {
    let dropdownMenu = d3.select("#selDataset");
    let name = dropdownMenu.property("onchange");

    let x = [];
    let y = [];

    if (name === this) {
        x = [];
        y = [];
    }
} */

/*let trace1 = {
   x: data.map(person => person.samples.sample_values),
   y: data.map(person => person.samples.otu_ids),
   label: data.map(person => person.samples.otu_labels),
   type: 'bar',
   orientation: 'h'
};

data = [trace1]
Plotly.newPlot("plot", trace1)*/