// Read in samples from URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
d3.json(url).then(function(data) {
    console.log(data);
});

// Initialize Page
function init() {
    // variable for selector  
    let selector = d3.select("#selDataset");
    
    d3.json(url).then(function(data) {
        let names = data.names;
        // Adding all id #'s to dropdown  
        names.forEach(element => {
            // console.log(element);
            selector.append("option").text(element).property("value");            
        });
        let idSelect = names[0];
        charts(idSelect);
    });
};

//  Bar Chart & Bubble Chart
function charts(sample) {
    d3.json(url).then(function(data) {

        // Gather data into variables for plotting
        var samples = data.samples;
        // Filter results for user selection
        function UserInput(results) {
            return results.id == sample;
        };
        var selection = samples.filter(UserInput)[0];
        var otuIds = selection.otu_ids;
        var otuLabels = selection.otu_labels;
        var values = selection.sample_values;

        // Bar plot parameters using top 10
        let yticks = otuIds.slice(0,10).map(id => `OTU ${id}`).reverse();
        let xticks = values.slice(0,10).reverse();
        let labels = otuLabels.slice(0,10).reverse();
        
        let trace = [{
            y: yticks,
            x: xticks,
            text: labels,
            type: "bar",
            orientation: "h"
        }];
        let layout = {
            title: `Top 10 OTU's found in ${selection}`
        };
        Plotly.newPlot("bar",trace,layout);

    });

};
init();
