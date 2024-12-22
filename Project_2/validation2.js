// all the averages for the charts 

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



// the whole dataset 
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onload = function() 
 { 
     if (this.readyState == 4 && this.status == 200) 
     { 
        dataSet = JSON.parse(this.responseText); 

    }
}
xmlhttp.open("GET", "data1_query.php",true); 
xmlhttp.send();

// filter range 
var filter;
var xmlhttp = new XMLHttpRequest(); 
xmlhttp.onload = function() 
{ 
    if (this.readyState == 4 && this.status == 200) 
    { 
    
        filter = JSON.parse(this.responseText); 
   

    }
}
 xmlhttp.open("GET", "getFilter.php",true); 
 xmlhttp.send();

var rangedata;
var rangedata2;




function viewData1()
{

   var avg;
   var tableRow = [];

   // Get the avergae 
   var xmlhttp = new XMLHttpRequest(); 
       xmlhttp.onload = function() 
       { 
           if (this.readyState == 4 && this.status == 200) 
           { 
               avg = JSON.parse(this.responseText); 
           }
       }
       xmlhttp.open("GET", "avg.php",true); 
       xmlhttp.send();

       console.log(avg);

  var xmlhttp = new XMLHttpRequest();
   xmlhttp.onload = function() 
   { 
       if (this.readyState == 4 && this.status == 200) 
       { 
       var dataSet = JSON.parse(this.responseText); 


       google.charts.load('current', {'packages':['table']});
       google.charts.setOnLoadCallback(drawTable);

       function drawTable() {

           var data = new google.visualization.DataTable();
           data.addColumn('number','Record Number',);
           data.addColumn('string','Zipcode');
           data.addColumn('string','Zipcode Type'); 
           data.addColumn('string','City',);
           data.addColumn('string','State');
           data.addColumn('string','Location Type');
           data.addColumn('number','Latitude');
           data.addColumn('number', 'Longitude');
           data.addColumn('string', 'Country');
           data.addColumn('number', 'Taxes Filed'); 
           data.addColumn('number', 'Estimated Population'); 
           data.addColumn('number' , 'Total Wages');
           data.addColumn('number', 'Avg Wages');
          

          for(let i = 0; i < dataSet.length; i++)
          {    var row = [parseInt(dataSet[i].RecordNumber), dataSet[i].Zipcode, dataSet[i].ZipCodeType, dataSet[i].City, 
                          dataSet[i].State, dataSet[i].LocationType, parseFloat(dataSet[i].Latitude),  parseFloat(dataSet[i].Longitude),
                          dataSet[i].Country, parseFloat(dataSet[i].TaxReturnsFiled), parseFloat(dataSet[i].EstimatedPopulation), parseFloat(dataSet[i].TotalWages),
                          parseFloat(dataSet[i].AvgWages)];
               tableRow.push(row);
          }

       console.log(tableRow);
       data.addRows(tableRow);
          
     
           var table = new google.visualization.Table(document.getElementById('table_div'));
        
           // color for avg wage 
           var formatter = new google.visualization.ColorFormat();
           formatter.addRange(avg[0].AvgWages, null, 'white', 'red');
           formatter.format(data, 12);
          
           // color for avg population 
           var formatter = new google.visualization.ColorFormat();
           formatter.addRange(avg[0].EstimatedPopulation, null, 'white', 'green');
           formatter.format(data, 10);
   
           table.draw(data, {allowHtml: true, page: true, pageSize: 5, showRowNumber: true, width: '100%', height: '100%'});
          
           selection();
        }
       }
   }
   xmlhttp.open("GET", "data1_query.php",true); 
   xmlhttp.send();

}
function viewData2()
{
   var avg;
   var tableRow = [];
   var headerRow = [];

   // Get the avergae 
   var xmlhttp = new XMLHttpRequest(); 
       xmlhttp.onload = function() 
       { 
           if (this.readyState == 4 && this.status == 200) 
           { 
               avg = JSON.parse(this.responseText); 
           }
       }
       xmlhttp.open("GET", "avg2.php",true); 
       xmlhttp.send();


  var xmlhttp = new XMLHttpRequest();
   xmlhttp.onload = function() 
   { 
       if (this.readyState == 4 && this.status == 200) 
       { 
       var dataSet = JSON.parse(this.responseText); 
       console.log(dataSet);

       google.charts.load('current', {'packages':['table']});
       google.charts.setOnLoadCallback(drawTable);

       function drawTable() {

        document.cookie = "avg = " + avg[0].AvgWages + "; expire= Sun, 01 Jan 2023 00:00:00 UTC; path=/;";

           var data = new google.visualization.DataTable();
           data.addColumn('number','Record Number',);
           data.addColumn('string','Zipcode');
           data.addColumn('string','Zipcode Type'); 
           data.addColumn('string','City',);
           data.addColumn('string','State');
           data.addColumn('string','Location Type');
           data.addColumn('number','Latitude');
           data.addColumn('number', 'Longitude');
           data.addColumn('string', 'Country');
           data.addColumn('number', 'Taxes Filed'); 
           data.addColumn('number', 'Estimated Population'); 
           data.addColumn('number' , 'Total Wages');
           data.addColumn('number', 'Avg Wages');
          
           headerRow = ['Record Number','Zipcode','Zipcode Type','City','State','Location Type','Latitude','Longitude','Country',
                   'Taxes Filed','Estimated Population', 'Total Wages','Avg Wages'];

          for(let i = 0; i < dataSet.length; i++)
          {    var row = [parseInt(dataSet[i].RecordNumber), dataSet[i].Zipcode, dataSet[i].ZipCodeType, dataSet[i].City, 
                          dataSet[i].State, dataSet[i].LocationType, parseFloat(dataSet[i].Latitude),  parseFloat(dataSet[i].Longitude),
                          dataSet[i].Country, parseFloat(dataSet[i].TaxReturnsFiled), parseFloat(dataSet[i].EstimatedPopulation), parseFloat(dataSet[i].TotalWages),
                          parseFloat(dataSet[i].AvgWages)];
               tableRow.push(row);
          }

       
       data.addRows(tableRow);
          
    
           var table = new google.visualization.Table(document.getElementById('table_div'));
        
           // color for avg wage 
           var formatter = new google.visualization.ColorFormat();
           formatter.addRange(avg[0].AvgWages, null, 'white', 'red');
           formatter.format(data, 12);
          
           // color for avg population 
           var formatter = new google.visualization.ColorFormat();
           formatter.addRange(avg[0].EstimatedPopulation, null, 'white', 'green');
           formatter.format(data, 10);
   
           table.draw(data, {allowHtml: true, page: true, pageSize: 3, showRowNumber: true, width: '100%', height: '100%'});
           
           
       
        }
       }
   }
   xmlhttp.open("GET", "data2_query.php",true); 
   xmlhttp.send();

}

function selection()
{
    $(document).ready(function()
    {
         $('#selection').change(function()
         {
             selected_value = $("input[name='selection']:checked").val();
                    if(selected_value == 1)
                      avgWagesChart();
                    
                   if(selected_value == 2)
                       EstimatedPopulationChart();
                    
                    if(selected_value == 3)
                        stateCountChart();
       
                
             });
          
       });
}






function avgWagesChart()
 {
  
    var high;
    var low;
    var chartData = [];

    var header = ['State', 'Avg Wages'];
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
        var avgWageRangeSlider = new google.visualization.ControlWrapper({
            'controlType': 'NumberRangeFilter',
            'containerId': 'filter_div',
            'options': {
                'filterColumnLabel': 'Avg Wages',
            }
        });


        if(filter != undefined)
        {
            high = filter[0].avgWagesHigh;
            low = filter[0].avgWagesLow; 
            avgWageRangeSlider.setState({'lowValue': low, 'highValue': high});
            
        }

        google.visualization.events.addListener(avgWageRangeSlider, 'statechange', function () {
            var stateDate = avgWageRangeSlider.getState()
            rangedata = stateDate;
            console.log(stateDate);
           
            
        });
            
            
        // Create a pie chart, passing some options
        var BarChart = new google.visualization.ChartWrapper({
            'chartType': 'BarChart',
            'containerId': 'chart',
            'options': {
            'width': 400,
            'height': 300,
            'legend': 'none',
            'bar': {groupWidth: "80%"},
            //'view': {'columns': [0, 1]}
      
            }
        });

       var LineChart = new google.visualization.ChartWrapper({
            'chartType': 'LineChart',
            'containerId': 'chart2',
            'options': {
              'width': 300,
              'height': 300,
              'pieSliceText': 'value',
              'legend': 'none',
              //'view': {'columns': [0, 5]}
            }
          }); 

        
        // Establish dependencies, declaring that 'filter' drives 'pieChart',
        // so that the pie chart will only display entries that are let through
        // given the chosen slider range.
        dashboard.bind(avgWageRangeSlider, BarChart);
        dashboard.bind(avgWageRangeSlider, LineChart);
 

        // Draw the dashboard.
        dashboard.draw(data);

        }
 }


 function EstimatedPopulationChart() 
 {
    var chartData = [];
    var high;
    var low;

    var header = ['State', 'Estimated Population'];
    chartData.push(header);

    for(let i = 0; i < avgWages.length; i++)
    {
        let row = [avgWages[i].State, parseFloat(avgWages[i].population)];
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
    var populationRangeSlider = new google.visualization.ControlWrapper({
        'controlType': 'NumberRangeFilter',
        'containerId': 'filter_div',
        'options': {
        'filterColumnLabel': 'Estimated Population',
        }
    });

    if(filter != undefined)
    {
        high = filter[0].avgWagesHigh;
        low = filter[0].avgWagesLow; 
        populationRangeSlider.setState({'lowValue': low, 'highValue': high});
        
    }

    google.visualization.events.addListener(populationRangeSlider, 'statechange', function () {
        var stateDate2 = populationRangeSlider.getState()
        rangedata2 = stateDate2;
        console.log(stateDate2);
      //  filterTable(stateDate.highValue, stateDate.lowValue)
        
    });

    // Create a pie chart, passing some options
    var BarChart = new google.visualization.ChartWrapper({
        'chartType': 'BarChart',
        'containerId': 'chart',
        'options': {
        'width': 400,
        'height': 300,
        'legend': 'none',
        'bar': {groupWidth: "80%"},
        }
    });

    var LineChart = new google.visualization.ChartWrapper({
        'chartType': 'LineChart',
        'containerId': 'chart2',
        'options': {
          'width': 300,
          'height': 300,
          'pieSliceText': 'value',
          'legend': 'none',
        }
      });

    // Establish dependencies, declaring that 'filter' drives 'pieChart',
    // so that the pie chart will only display entries that are let through
    // given the chosen slider range.
    dashboard.bind(populationRangeSlider, BarChart);
    dashboard.bind(populationRangeSlider, LineChart);


    // Draw the dashboard.
    dashboard.draw(data);
    }
 }

 function stateCountChart()
{
    var chartData = [];

    var header = ['State', 'State Count'];
    chartData.push(header);

    for(let i = 0; i < avgWages.length; i++)
    {
        let row = [avgWages[i].State, parseFloat(avgWages[i].stateCount)];
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
    var stateRangeSlider = new google.visualization.ControlWrapper({
        'controlType': 'NumberRangeFilter',
        'containerId': 'filter_div',
        'options': {
        'filterColumnLabel': 'State Count',
        }
    });

    // Create a pie chart, passing some options
    var BarChart = new google.visualization.ChartWrapper({
        'chartType': 'BarChart',
        'containerId': 'chart',
        'options': {
        'width': 400,
        'height': 300,
        'legend': 'none',
        'bar': {groupWidth: "80%"},
        }
    });

    var PieChart = new google.visualization.ChartWrapper({
        'chartType': 'PieChart',
        'containerId': 'chart2',
        'options': {
          'width': 300,
          'height': 300,
          'pieSliceText': 'value',
          'legend': 'none',
        }
      });

    // Establish dependencies, declaring that 'filter' drives 'pieChart',
    // so that the pie chart will only display entries that are let through
    // given the chosen slider range.
    dashboard.bind(stateRangeSlider, BarChart);
    dashboard.bind(stateRangeSlider, PieChart);


    // Draw the dashboard.
    dashboard.draw(data);
    }
}


function saveSetting()
{
    document.cookie = "avgHighValue = " + rangedata.highValue + "; expire= Sun, 01 Jan 2023 00:00:00 UTC; path=/;";
    document.cookie = "avgLowValue = " + rangedata.lowValue + "; expire= Sun, 01 Jan 2023 00:00:00 UTC; path=/;";
    document.cookie = "popHighValue = " + rangedata2.highValue + "; expire= Sun, 01 Jan 2023 00:00:00 UTC; path=/;";
    document.cookie = "popLowValue = " + rangedata2.lowValue + "; expire= Sun, 01 Jan 2023 00:00:00 UTC; path=/;";
    window.location.href = "insert_setting.php";
}