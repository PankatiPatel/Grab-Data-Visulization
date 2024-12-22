    
    var chartData=[]; //  push data for chart drawing

    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);


        function drawChart() {
            // get jason.encode from php file using get attribute
            var xmlhttp = new XMLHttpRequest(); 
                xmlhttp.onload = function() { 
	                if (this.readyState == 4 && this.status == 200) { 
		            var dataSet = JSON.parse(this.responseText); 

                    console.log(dataSet);
            
            var header = ['Groups', 'Math Scores', 'Reading Score', 'Writing Score'];
            chartData.push(header); 

            for(let i = 0; i < dataSet.length; i++){
                
                var row = [dataSet[i].Ethnicity,dataSet[i].Math, dataSet[i].Reading, dataSet[i].Writing];
                chartData.push(row);

            }

        
            var data = google.visualization.arrayToDataTable(chartData);
            var options = {
            colors: ['#E0BBE4', '#D291BC', '#FEC8DB'],
            chart: {
                title: 'Student Perfromance on Exams',
                subtitle: 'Perfromance measured by groups',
             
            },
            bars: 'vertical' // Required for Material Bar Charts.
            };

            var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }

    } 
    xmlhttp.open("GET", "queries.php", true); 
    xmlhttp.send();
} 



 