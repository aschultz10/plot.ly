// Create H Grah, Filter, Bubble Chart, Plot, then Dropdown

// Creating Horizontal Graph, start function and pull data with d3

function horizontal(id) {
    d3.json("samples.json").then((data) => {
      var sample = data.samples;

// Create sample_values, otu_ids, otu_labels variables, we want the first ones [0] 
      var ids = sample.filter(x => x.id == id);
      var otu_ids = ids[0].otu_ids;
      var otu_labels = ids[0].otu_labels;
      var otu_values = ids[0].sample;

// Y values
      var yaxis = otu_ids.slice(0, 10).map(x => "OTU" + x).reverse()

// Start defining the datatrace with variables we created above
      var trace = {
        
//Filter for Top Ten with slice reverse
        x: otu_values.slice(0, 10).reverse(),     
        y: yaxis,    
        text: otu_labels.slice(0, 10).reverse(),     
        type: "bar", 
        orientation: "h"
      };
      var layout = {
        title: "Bacteria found"
      };
      var data = [trace];
      Plotly.newPlot("bar", data, layout);
  
// Create bubble chart variable, add appropriate variables from above 

      var bubbleData = {
        x: otu_ids,
        y: otu_values,
        text: otu_labels,
        mode: "markers",
        marker: {
          size: otu_values,
          color: otu_ids,
          colorscale: "Earth"
        }
      }
// Create layout for bubble chart
      var bubbleLayout = {
        title: "Bacteria cultures per sample",
        margin: {
          t: 30
        },
        hovermode: "closest",
        xaxis: {
          title: "OTU Id"
        }
      }

// Plot bubble chart      
      Plotly.newPlot("bubble", [bubbleData], bubbleLayout)
    });
  };
  

function dropdown() {
    var dropdown = d3.select("#selDataset");
    // Pull data w d3
    d3.json("data/samples.json").then((data)=> {
        console.log(data)
        data.names.forEach(function(name) {
            dropdown.
            append("option").
            text(name).
            property("value");
        });
        getPlot(data.names[0]);
        getInfo(data.names[0]);
    });
}


