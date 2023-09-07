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

    console.log("names: ", data.names)

    // REFERENCED HTMLCHEATSHEET.COM/JS/
    for(let i=0, l=data.metadata.length; i<l; i++) {
        if (data.metadata[i].id == 941) {
            console.log("metadata: ", data.metadata[i])

            //------------------------
            // DEMOGRAPHIC INFORMATION HERE
            // d3.select("#sample-metadata").text()

            console.log("samples: ", data.samples[i])

            //------------------------
            // HORIZONTAL BAR GRAPH - [i] WILL BE THE SAME ACROSS ELEMENTS
            
            let trace1 = {
                x: data.samples[i].sample_values.slice(0, 10).reverse(),
                y: String(data.samples[i].otu_ids.slice(0, 10).reverse()),
                label: data.samples[i].otu_labels.slice(0, 10).reverse(),
                type: 'bar',
                orientation: 'h'
            };

            let data1 = [trace1];

            let layout1 = {
                title: `Top 10 OTUs for ID No. 943` //${chosenId}
            };

            Plotly.newPlot("bar", data1, layout1);

            //---------------------
            //BUBBLE CHART, SAME DATA AS 'chosenData'
            let trace2 = {
                x: data.samples[i].otu_ids,
                y: data.samples[i].sample_values,
                text: data.samples[i].otu_labels,
                mode: 'markers',
                marker: {
                    color: data.samples[i].otu_ids,
                    size: data.samples[i].sample_values
                }
            };

            let data2 = [trace2];

            let layout2 = {
                title: 'Fingers Crossed',
                showlegend: false,
                height: 500,
                width: 1000
            };

            Plotly.newPlot('bubble', data2, layout2)

        }
    }


})
// -----------------------------------------------------


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
