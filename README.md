# belly-button-challenge
Deployment link can be found here https://vdescioli.github.io/
Main directory contains index.html
Static directory contains app.js file

# Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

# Instructions
Complete the following steps:

Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

Use sample_values as the values for the bar chart.

Use otu_ids as the labels for the bar chart.

Use otu_labels as the hovertext for the chart.

![image](https://github.com/vdescioli/belly-button-challenge/assets/123039043/3eb35e58-d77a-4822-b418-6c37c2493915)


Create a bubble chart that displays each sample.

Use otu_ids for the x values.

Use sample_values for the y values.

Use sample_values for the marker size.

Use otu_ids for the marker colors.

Use otu_labels for the text values.

![image](https://github.com/vdescioli/belly-button-challenge/assets/123039043/3ef91793-53d1-44bd-86e9-976d1cda71f9)


Display the sample metadata, i.e., an individual's demographic information.

Display each key-value pair from the metadata JSON object somewhere on the page.

![image](https://github.com/vdescioli/belly-button-challenge/assets/123039043/61931a89-62c5-4c8a-8310-7d693066d6f0)

Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

![image](https://github.com/vdescioli/belly-button-challenge/assets/123039043/9ece8812-a1d3-4a0c-b82b-71aa25fdb002)


Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file
