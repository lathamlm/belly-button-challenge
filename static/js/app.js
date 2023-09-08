// URL TO JSON
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// d3 TO READ IN/CONSOLE LOG JSON
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);


// PULL DATA
d3.json(url).then(function(data){
    
    // LIST OF NAMES TO GO INTO DROPDOWN
    /*for(let x=0, len=data.names.length; x<len; x++) {
        let namesList = data.names
    }*/
    // need to figure out how to get this into dropdown
    // maybe for loop to review list and if element not in it, add it?
    
    // ADD IN HERE DROPDONW CLICK INFORMATION


    console.log("names: ", data.names)

    /* -----------------------------------------------------------------------
    ------------------------------------------------------------------------*/

    function init() {
        // DEMOGRAPHIC INFO
        let demoKeys = Object.keys(data.metadata[0])
        let demoValues = Object.values(data.metadata[0])
        for(let j=0, len=demoKeys.length; j<len; j++) {
            d3.select('ul').append("li").text(demoKeys[j] + ": " + demoValues[j])
        };

        // STATIC HORIZONTAL BAR GRAPH
        let valueTest = data.samples[0].otu_ids.slice(0, 10).reverse()
        let stringValue = valueTest.map(item => "OTU" + " " + String(item))

        // TRACE 1 FOR BAR GRAPH
        // REFERENCED https://plotly.com/javascript/horizontal-bar-charts/
        let trace1 = {
            x: data.samples[0].sample_values.slice(0, 10).reverse(),
            y: stringValue,
            text: data.samples[0].otu_labels.slice(0, 10).reverse(),
            type: 'bar',
            orientation: 'h'
        };

        let data1 = [trace1];

        let layout1 = {
            title: `Top 10 OTUs for ID No. 940`, //${chosenId}
            height: 600,
            width: 500
        };

        Plotly.newPlot("bar", data1, layout1);

        //---------------------
        //BUBBLE CHART, SAME DATA AS BAR GRAPH
        // REFERENCED https://plotly.com/javascript/bubble-charts/
        let trace2 = {
            x: data.samples[0].otu_ids,
            y: data.samples[0].sample_values,
            text: data.samples[0].otu_labels,
            mode: 'markers',
            marker: {
                color: data.samples[0].otu_ids,
                size: data.samples[0].sample_values
            }
        };

        let data2 = [trace2];

        let layout2 = {
            title: `OTU Volume for ID No. 940`,
            showlegend: false,
            height: 500,
            width: 1100
        };

        Plotly.newPlot('bubble', data2, layout2)

        // ---------------------
        // GAUGE CHART
        // REFERENCED https://plotly.com/javascript/gauge-charts/
        let data3 = [
            {
                domain: {x: [0,1], y: [0,1]},
                value: data.metadata[0].wfreq,
                title: { text: "Washing Frequency (scrubs/week)"},
                gauge: {
                    axis: {visible: false, range: [0,9]},
                    bar: {color: "#003366"},
                    steps: [
                        {range: [0,1], color: "#f7f5f0"},  //COLOR HEX
                        {range: [1,2], color: "#f2f1e9"},
                        {range: [2,3], color: "#f0ece2"},
                        {range: [3,4], color: "#e8e3d3"},
                        {range: [4,5], color: "#c9e1bf"},
                        {range: [5,6], color: "#b3d5a4"},
                        {range: [6,7], color: "#9dc98a"},
                        {range: [7,8], color: "#93c47d"},
                        {range: [8,9], color: "#84b070"},
                    ]
                },
                type: "indicator",
                mode: "gauge+number"
            }
        ];

        let layout3 = {
            height: 500,
            width: 500,
            margin: {
                t: 3,
                b: 3
            }
        };

        Plotly.newPlot("gauge", data3, layout3);
    };
    /*--------------------------------------------------------------------
    --------------------------------------------------------------------*/
    

    //d3.selectAll("#selDataSet").on("click", updatePlotly);

    // REFERENCED HTMLCHEATSHEET.COM/JS/ FOR FORMATTING
    /*function updatePlotly() {
        let dropdownMenu = d3.select("#selDataset");
        let dataset = dropdownMenu.property("value");

        let x = [];
        let y = [];

        if(dataset == this) {
            x = data.samples[this].otu_ids,
            y = data.samples[0].sample_values;
        }*/

        // CHOSENID TO BE 'THIS' ON CHANGE
        let chosenId = this;
        for(let i=0, l=data.metadata.length; i<l; i++) {
            if (data.metadata[i].id == chosenId) {
                console.log("metadata keys: ", Object.keys(data.metadata[i]))
                console.log("metadata values: ", Object.values(data.metadata[i]))
                //------------------------
                // DEMOGRAPHIC INFORMATION HERE
                let demoKeys = Object.keys(data.metadata[i])
                let demoValues = Object.values(data.metadata[i])
                
                for(let j=0, len=demoKeys.length; j<len; j++) {
                    console.log(demoKeys[j], ": ", demoValues[j])
                    // ADDED <UL> TO HTML TO APPEND to list
                    d3.select("ul").append("li").text(demoKeys[j] + ": " + demoValues[j])
                }

                console.log("samples: ", data.samples[i])

                //------------------------
                // HORIZONTAL BAR GRAPH - [i] WILL BE THE SAME ACROSS ELEMENTS

                // FORMATTING FOR Y VALUE, STRING TO ADD OTU
                let valueTest = data.samples[i].otu_ids.slice(0, 10).reverse()
                let stringValue = valueTest.map(item => "OTU" + " " + String(item))
                
                let x = [];
                let y = [];

                // TRACE 1 FOR BAR GRAPH
                // REFERENCED https://plotly.com/javascript/horizontal-bar-charts/
                let trace1 = {
                    x: data.samples[i].sample_values.slice(0, 10).reverse(),
                    y: stringValue,
                    text: data.samples[i].otu_labels.slice(0, 10).reverse(),
                    type: 'bar',
                    orientation: 'h'
                };

                let data1 = [trace1];

                let layout1 = {
                    title: `Top 10 OTUs for ID No. ${chosenId}`, //${chosenId}
                    height: 600,
                    width: 500
                };

                Plotly.newPlot("bar", data1, layout1);

                //---------------------
                //BUBBLE CHART, SAME DATA AS BAR GRAPH
                // REFERENCED https://plotly.com/javascript/bubble-charts/
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
                    title: `OTU Volume for ID No. ${chosenId}`,
                    showlegend: false,
                    height: 500,
                    width: 1100
                };

                Plotly.newPlot('bubble', data2, layout2)

                // --------------------------------------------------------------------
                // GAUGE CHART
                // REFERENCED https://plotly.com/javascript/gauge-charts/
                let data3 = [
                    {
                        domain: {x: [0,1], y: [0,1]},
                        value: data.metadata[i].wfreq,
                        title: { text: "Washing Frequency (scrubs/week)"},
                        gauge: {
                            axis: {visible: false, range: [0,9]},
                            bar: {color: "#003366"},
                            steps: [
                                {range: [0,1], color: "#f7f5f0"},  //COLOR HEX
                                {range: [1,2], color: "#f2f1e9"},
                                {range: [2,3], color: "#f0ece2"},
                                {range: [3,4], color: "#e8e3d3"},
                                {range: [4,5], color: "#c9e1bf"},
                                {range: [5,6], color: "#b3d5a4"},
                                {range: [6,7], color: "#9dc98a"},
                                {range: [7,8], color: "#93c47d"},
                                {range: [8,9], color: "#84b070"},
                            ]
                        },
                        type: "indicator",
                        mode: "gauge+number"
                    }
                ];

                let layout3 = {
                    height: 500,
                    width: 500,
                    margin: {
                        t: 3,
                        b: 3
                    }
                };

                Plotly.newPlot("gauge", data3, layout3);
                // -------------------------------------------------------------------
            }
        }


    // INITIALIZING THE FIRST FUNCTION TO HAVE DATA PRE-FILLED
    init();
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
