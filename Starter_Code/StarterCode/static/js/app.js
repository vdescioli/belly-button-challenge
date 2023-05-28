// Read in samples from URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
d3.json(url).then(function(data) {
    console.log(data);
});

// Initialize
function init() {
    // variable for selector  
    let selector = d3.select("#selDataset");
    
    d3.json(url).then(function(data) {
        data.names.forEach(element => {
            console.log(element);
            selector.append("option").text(element).property("value");
            
        });
    });

};
init();
