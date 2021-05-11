// Use the D3 library to read in samples.json.
// Get the data using function

function grabdata(id) {
      d3.json("samples.json").then((data) => {

// Using d3 create variables based on what is needed in the horizontal bar chart
       
        var sample_values = data.samples;
        
// Filter for only IDs using " x => " method
    var filtered = sample_values.filter(x=> x.id === id); 

// Use Filtered variable to define variables with correct IDs
    var otu_ids = filtered[0].otu_ids;
    var otu_labels = filtered[0].otu_labels;
    var otu_xvalues = filtered[0].otu_xvalues;
    var otu_yvalues = filtered[0].otu_yvalues;

    var datatrace = {
        
    }

      }  
