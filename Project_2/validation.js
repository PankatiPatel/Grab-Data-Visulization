var tableData = [];
// try return false in form to stop reload of page
function csvLoad()
{
   var file =  document.getElementById("file");    // get file name
   var fileName = file.files[0].name;
   var extenstion = fileName.split('.');
   
   if(extenstion[extenstion.length-1] != "csv" )
        document.getElementById("file-error-msg").innerHTML = "The data is not a correct format. Only csv file can be loaded";  
        
   else
   {
        
        let readFile = file.files[0];    
        let fileReader = new FileReader(); 
        fileReader.readAsText(readFile); 
             fileReader.onload = function()
              {
                  filedata = fileReader.result.split("\n" ); 
                                                 // read data and split after new line
                  for(let i in filedata)                              
                    filedata[i] = filedata[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(refi=>refi.replace(/[\x00-\x08\x0E-\x1F\x7F-\uFFFF]/g, "").trim());             // loop through the rows and in each index split each column with commas and push back into data array
                
                    document.getElementById("file-error-msg").innerHTML = "There are " + filedata.length + " records"; 

                   getColumn(filedata);
                   PopPerCityBarChart(filedata);
                   PopPerCityLineChart(filedata);
                   MakeOfCarBar(filedata);
                   MakeofCarLine(filedata);
                   StateOfCarBar(filedata);
                   StateOfCarPie(filedata);


                //  document.getElementById("file-error-msg").innerHTML = filedata.length;
                  

                  google.charts.load('current', {'packages':['table']});
                  google.charts.setOnLoadCallback(drawTable);

                  function drawTable()
                {
                    var data = new google.visualization.DataTable();

                    
                    for(let i in filedata[0])
                        // need column datatype and then column name
                         data.addColumn(typeof filedata[0][i], filedata[0][i]);

                    
                    for(let i = 1; i <= 100; i++)
                    {

                        var row = filedata[i];
                        tableData.push(row);
                    }

                    data.addRows(tableData);
                    var table = new google.visualization.Table(document.getElementById('table_div'));
                
                    table.draw(data, {page: true, pageSize: 10, showRowNumber: true, width: '100%', height: '20%'});
                   
                   
                }
              
             }
     
    }
}

function getColumn(data,columnNum)
{

    var temp = [];
    const countColumn = {};

    for(i = 1; i< data.length; i++)
      temp.push(data[i][columnNum]);
    
 
    temp.forEach(element => {
         countColumn[element] = (countColumn[element] || 0) + 1;
    });
    

    return countColumn;
}



function PopPerCityBarChart(data)
{
    var chartData =[];
    countColumn= getColumn(data,5);
    year = Object.keys(countColumn);
    count = Object.values(countColumn);

    var header = ['Year', 'Count'];
    chartData.push(header);


    for(i = 0; i <=year.length; i++ )
    {
        var row = [year[i],count[i]];
        chartData.push(row);
    }

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(chartData);
        var view = new google.visualization.DataView(data);
        var options = {
            title: "Electric Car Population Per Year",
            width: 500,
            height: 400,
            bar: {groupWidth: "80%"},
           
      };

    $(document).ready(function(){
        $('#selection').change(function(){
            selected_value = $("input[name='selection']:checked").val();
                $("#bar").click(function(){
                    if(selected_value == 1){
                    document.getElementById("table_div").style.marginTop = "26vh";
                    var chart = new google.visualization.BarChart(document.getElementById("chart"));
                    chart.draw(view, options);
                    }
                    //else 
                     //   document.getElementById("file-error-msg").innerHTML = "There is no graph";  // come back to this
                
            });
         
      });
    });
   

  }
}

function  PopPerCityLineChart(data)
{

    countColumn = getColumn(data,5);
    year = Object.keys(countColumn);
    count = Object.values(countColumn);

    var chartData = [];
    var header = ['Year', 'Count'];
    chartData.push(header);

    
  
    for(i = 0; i <=year.length; i++ )
    {
        var row = [year[i],count[i]];
        chartData.push(row);
    }



    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(chartData);
        var options = {
         chart: { title: 'Electric Car Population per Year',
          curveType: 'function',
        },
        width: 600,
        height: 350,
      
    };

       $(document).ready(function()
       {
            $('#selection').change(function()
            {
                selected_value = $("input[name='selection']:checked").val();
                    $("#line").click(function()
                    {
                        if(selected_value == 1)
                        {
                            document.getElementById("table_div").style.marginTop = "33vh";
                            var chart = new google.visualization.LineChart(document.getElementById('chart'));
                            chart.draw(data, options);
                        }
                            
                    
                });
             
          });
        });
       
      
 }



}

function MakeOfCarBar(data)
{
    countColumn = getColumn(data,6);
    make = Object.keys(countColumn);
    count = Object.values(countColumn);

    var chartData = [];
    var header = ['Make', 'Count'];
    chartData.push(header);

    
  
    for(i = 0; i <=make.length; i++ )
    {
        var row = [make[i],count[i]];
        chartData.push(row);
    }

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() 
    {
        var data = google.visualization.arrayToDataTable(chartData);
        var view = new google.visualization.DataView(data);
        var options = {
            title: "Electric Car Population by Model",
            width: 500,
            height: 400,
            bar: {groupWidth: "80%"},
           
      };

      $(document).ready(function()
       {
            $('#selection').change(function()
            {
                selected_value = $("input[name='selection']:checked").val();
                    $("#bar").click(function()
                    {
                        if(selected_value == 2)
                        {
                            document.getElementById("table_div").style.marginTop = "26vh";
                            var chart = new google.visualization.BarChart(document.getElementById("chart"));
                            chart.draw(view, options);
                            
                        }
                            
                    
                });
             
          });
        });
       
  
    }
}

function MakeofCarLine(data)
{
    countColumn = getColumn(data,6);
    make = Object.keys(countColumn);
    count = Object.values(countColumn);

    var chartData = [];
    var header = ['Make', 'Count'];
    chartData.push(header);

    
  
    for(i = 0; i <=make.length; i++ )
    {
        var row = [make[i],count[i]];
        chartData.push(row);
    }

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(chartData);
        var options = {
         chart: { title: 'Electric Car Population by Model',
          curveType: 'function',
        },
        width: 600,
        height: 350,
      
    };

       $(document).ready(function()
       {
            $('#selection').change(function()
            {
                selected_value = $("input[name='selection']:checked").val();
                    $("#line").click(function()
                    {
                        if(selected_value == 2)
                        {
                            document.getElementById("table_div").style.marginTop = "33vh"
                            var chart = new google.visualization.LineChart(document.getElementById('chart'));
                            chart.draw(data, options);
                        }
                            
                    
                });
             
          });
        });
       
      
 }


}

function StateOfCarBar(data)
{
    countColumn = getColumn(data,8);
    type= Object.keys(countColumn);
    count = Object.values(countColumn);

    var chartData = [];
    var header = ['State', 'Count'];
    chartData.push(header);

    
    console.log(countColumn);
    for(i = 0; i <=type.length-1; i++ )
    {
        var row = [type[i],count[i]];
        chartData.push(row);
    }



    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() 
    {
        var data = google.visualization.arrayToDataTable(chartData);
        var view = new google.visualization.DataView(data);
        var options = {
            title: "Electric Car Population by Type",
            width: 500,
            height: 400,
            bar: {groupWidth: "80%"},
           
      };

      $(document).ready(function()
       {
            $('#selection').change(function()
            {
                selected_value = $("input[name='selection']:checked").val();
                    $("#bar").click(function()
                    {
                        if(selected_value == 3)
                        {
                            document.getElementById("table_div").style.marginTop = "26vh";                  
                            var chart = new google.visualization.BarChart(document.getElementById("chart"));
                            chart.draw(view, options);
                        }
                            
                    
                });
             
          });
        });
       
  
    }
}

function StateOfCarPie(data)
{
    countColumn = getColumn(data,8);
    type= Object.keys(countColumn);
    count = Object.values(countColumn);

    var chartData = [];
    var header = ['State', 'Count'];
    chartData.push(header);

    
    console.log(countColumn);
    for(i = 0; i <=type.length-1; i++ )
    {
        var row = [type[i],count[i]];
        chartData.push(row);
    }

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = google.visualization.arrayToDataTable(chartData)

      var options = {
        title: 'Electric Car Population by Type'
      };

      
      $(document).ready(function()
      {
           $('#selection').change(function()
           {
               selected_value = $("input[name='selection']:checked").val();
                   $("#pie").click(function()
                   {
                       if(selected_value == 3)
                       {

                           var chart = new google.visualization.PieChart(document.getElementById('chart'));

                           chart.draw(data, options);
                     
                       }
                           
                   
               });
            
         });
       });
      
    }

}

 function myInfo()
 {
    alert("Name: Pankati Patel \n"  + 
          "Course ID: CPS5745 \n "+
          "Due: 11-2-22");
 }

 function logout()
 {
    

    if(confirm("Are you sure you want to log out? ") == true)
    {
        window.location.href = "logout.php";
        
        document.getElementById("file-error-msg").innerHTML = "You have sucessfully logged out";
    }

 }

 function exit()
 {
        if (confirm("Close Window?")) 
        {
            console.log('closing stats window');
            self.close();
        }
      
 }

