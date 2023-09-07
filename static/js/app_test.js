const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

d3.json(url).then(function(data) {
    console.log("All Data: ", data);
});
age = []


d3.json(url).then(function(data){
    idNums = data.names;

    metaData = data.metadata;
    // REFERENCED W3SCHOOLS.COM/JS/JS_LOOP_FOR.ASP
    for(let i=0, l=data.metadata.length; i<l; i++) {
        age.push(data.metadata[i].id);
        
    }
    console.log("Loop: ", age)
    sampleData = data.samples;

    console.log("Test: ", metaData[0].id);
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

console.log("Loop test: ", age)
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