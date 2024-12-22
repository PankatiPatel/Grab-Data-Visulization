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





 

function avgWages()
 {
        var chartData = [];

        var header = ['State', 'Average Wages'];
        chartData.push(header);

        for(let i = 0; i < avgWages.length; i++)
        {
            let row = [avgWages[i].State, parseFloat(avgWages[i].totalWages)];
            chartData.push(row);
        }
           
            // Load the Visualization API and the controls package.
        google.charts.load('current', {'packages':['corechart', 'controls']});

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawDashboard);

        // Callback that creates and populates a data table,
        // instantiates a dashboard, a range slider and a pie chart,
        // passes in the data and draws it.
        function drawDashboard() {

        // Create our data table.
        var data = google.visualization.arrayToDataTable(chartData);

        // Create a dashboard.
        var dashboard = new google.visualization.Dashboard(
            document.getElementById('dashboard_div'));

        // Create a range slider, passing some options
        var donutRangeSlider = new google.visualization.ControlWrapper({
            'controlType': 'NumberRangeFilter',
            'containerId': 'filter_div',
            'options': {
            'filterColumnLabel': 'Average Wages'
            }
        });

        // Create a pie chart, passing some options
        var BarChart = new google.visualization.ChartWrapper({
            'chartType': 'BarChart',
            'containerId': 'chart',
            'options': {
            'width': 400,
            'height': 300,
            'pieSliceText': 'value',
            'legend': 'none',
            'bar': '{groupWidth: "80%"}',
            }
        });

        // Establish dependencies, declaring that 'filter' drives 'pieChart',
        // so that the pie chart will only display entries that are let through
        // given the chosen slider range.
        dashboard.bind(donutRangeSlider, pieChart);

        // Draw the dashboard.
        dashboard.draw(data);
        }
 }





 function p2AvgWageBar()
{


    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onload = function() 
    { 
        if (this.readyState == 4 && this.status == 200) 
        { 
            avgWages = JSON.parse(this.responseText); 

            var chartData = [];
            var header = ['State', 'Average Wages'];

            chartData.push(header);

             for(let i = 0; i < avgWages.length; i++)
              {
                  let row = [avgWages[i].State, parseFloat(avgWages[i].totalWages)];
                  chartData.push(row);
              }
                    

                google.charts.load('current', {'packages':['corechart']});
                google.charts.setOnLoadCallback(drawChart);

                    function drawChart() 
                    {
                    
                    var data = google.visualization.arrayToDataTable(chartData);
                    var view = new google.visualization.DataView(data);
                        var options = {
                            title: "Average Wage Per State",
                            legend: 'none',
                            width: 400,
                            height: 300,
                            bar: {groupWidth: "80%"},
                        
                    };

                                //document.getElementById("chart2").style.marginLeft = "65vw";
                                //sdocument.getElementById("")
                                var chart = new google.visualization.BarChart(document.getElementById("chart"));
                                chart.draw(view, options);
       
                    }
        }
    }
xmlhttp.open("GET", "avgWages.php",true); 
xmlhttp.send();
}

function p2AvgWageLine()
{
    var avgWages;
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onload = function() 
    { 
        if (this.readyState == 4 && this.status == 200) 
        { 
            avgWages = JSON.parse(this.responseText); 

            var chartData = [];
            var header = ['State', 'Average Wages'];

            chartData.push(header);

             for(let i = 0; i < avgWages.length; i++)
              {
                  let row = [avgWages[i].State, parseFloat(avgWages[i].totalWages)];
                  chartData.push(row);
              }

            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);

                function drawChart() 
                {
                    var data = google.visualization.arrayToDataTable(chartData);
                    var options = 
                    {
                    chart: { title: 'Average Wage Per State',
                    curveType: 'function',
                 
                    },
                    width: 400,
                    height: 290,
                    legend: 'none',
                
                    };
                    document.getElementById("table_div").style.marginTop = "33vh";
                    var chart = new google.visualization.LineChart(document.getElementById('chart2'));
                    chart.draw(data, options);
            
        
                }

        }
    }
    xmlhttp.open("GET", "avgWages.php",true); 
    xmlhttp.send();
}




function p2EstimatedPopulationBar()
{
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onload = function() 
    { 
        if (this.readyState == 4 && this.status == 200) 
        { 
            avgWages = JSON.parse(this.responseText); 

            var chartData = [];
            var header = ['State', 'Estimated Population'];

            chartData.push(header);

             for(let i = 0; i < avgWages.length; i++)
              {
                  let row = [avgWages[i].State, parseFloat(avgWages[i].population)];
                  chartData.push(row);
              }
                    

                google.charts.load('current', {'packages':['corechart']});
                google.charts.setOnLoadCallback(drawChart);

                    function drawChart() 
                    {
                    
                    var data = google.visualization.arrayToDataTable(chartData);
                    var view = new google.visualization.DataView(data);
                        var options = {
                            title: "Estimated Population Per State",
                            legend: 'none',
                            width: 400,
                            height: 300,
                            bar: {groupWidth: "80%"},
                        
                    };

                                //document.getElementById("chart2").style.marginLeft = "65vw";
                                //sdocument.getElementById("")
                                var chart = new google.visualization.BarChart(document.getElementById("chart"));
                                chart.draw(view, options);
       
                    }
        }
    }
xmlhttp.open("GET", "avgWages.php",true); 
xmlhttp.send();

}


function p2EstimatedPopulationLine()
{
    var avgWages;
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onload = function() 
    { 
        if (this.readyState == 4 && this.status == 200) 
        { 
            avgWages = JSON.parse(this.responseText); 

            var chartData = [];
            var header = ['State', 'Estimated Population'];

            chartData.push(header);

             for(let i = 0; i < avgWages.length; i++)
              {
                  let row = [avgWages[i].State, parseFloat(avgWages[i].population)];
                  chartData.push(row);
              }

            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);

                function drawChart() 
                {
                    var data = google.visualization.arrayToDataTable(chartData);
                    var options = 
                    {
                    chart: { title: 'Estimated Population Per State',
                    curveType: 'function',
                 
                    },
                    width: 400,
                    height: 290,
                    legend: 'none',
                
                    };
                    document.getElementById("table_div").style.marginTop = "33vh";
                    var chart = new google.visualization.LineChart(document.getElementById('chart2'));
                    chart.draw(data, options);
            
        
                }

        }
    }
    xmlhttp.open("GET", "avgWages.php",true); 
    xmlhttp.send();
}
