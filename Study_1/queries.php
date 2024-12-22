<?php 
 include("dbconfig.php"); 


$avg = "SELECT Ethnicity, 
        AVG(Math_Score) AS Math,
        AVG(Reading_Score) AS Reading, 
        AVG(Writing_Score) AS Writing 
        FROM StudentsPerformance
        GROUP BY Ethnicity ";


$avg_result = mysqli_query($conn, $avg); 
$avg_numRow = mysqli_num_rows($avg_result); 

$result_arr = array(); 
while($row = mysqli_fetch_assoc($avg_result)){
   
    $result_arr[] = $row; 
}

echo json_encode($result_arr);

mysqli_free_result($avg_result);

mysqli_close($conn);

?>
