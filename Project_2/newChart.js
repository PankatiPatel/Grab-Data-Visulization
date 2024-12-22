
var avgWages;

var xmlhttp = new XMLHttpRequest(); 
xmlhttp.onload = function() 
{ 
    if (this.readyState == 4 && this.status == 200) 
    { 
        avgWages = JSON.parse(this.responseText); 

    }
}
 xmlhttp.open("GET", "avgWages.php",true); 
 xmlhttp.send();


function map()
{
  
              var chartData = [];
              var header = ['State', 'AvgWage','Estimated Population'];
  
              chartData.push(header);
  
               for(let i = 0; i < avgWages.length; i++)
                {
                    let row = [avgWages[i].State, parseFloat(avgWages[i].totalWages), parseFloat(avgWages[i].population)];
                    chartData.push(row);
                }
              

                 google.charts.load('current', {
                 'packages':['geochart'],
                 'mapsApiKey': 'AIzaSyAfiZNDPOIIzSuu2JKqlw6KbOjNPPdGjB0'
            });
                  google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable(chartData);
       

        var options = {
          region: 'US', // America
          displayMode: 'regions',
          resolution: 'provinces',
          colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
          datalessRegionColor: '#f8bbd0',
          defaultColor: 'white',
          width: 300,
          height: 300,
        };

        var chart = new google.visualization.GeoChart(document.getElementById('chart'));
        chart.draw(data, options);
      };

      jsChart();

}


function jsChart()
{

    var chartData = [];
    var state = [];

    for(let i = 0; i < avgWages.length; i++)
    {
        state.push(avgWages[i].State);
        chartData.push(avgWages[i].stateCount);
    }
    console.log(state);
    console.log(chartData);

    const ctx = document.getElementById('myChart').getContext('2d');




    new Chart(ctx, {
        type: 'radar',
        data: {
          labels: state,
          datasets: [{
            label: 'Count',
            data: chartData,
            borderWidth: 1
          }]
        },
        options: {
            responsive: false
        }
      });

}



// html true in map 
// tool tip 
// make table and add in marker 
