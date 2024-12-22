<?php
 include("dbconfig.php"); 

$result_arr = array(); 

$sql = "SELECT v.State AS Code , 
               SUM(v.AvgWages) AS totalWages, 
               SUM(v.EstimatedPopulation) AS population, 
               count(*) AS stateCount, 
               v.Latitude, 
               v.Longitude,
               s.State
        FROM datamining.vDV_Data1 v, 2022F_patpanka.STATES s
        WHERE s.Code = v.state  GROUP BY v.State";
$result = mysqli_query($conn, $sql);
$rows = mysqli_num_rows($result);

if($result)
{
    if($rows > 0)
    {
        while($row = mysqli_fetch_assoc($result))
        {
            $result_arr[] = $row;
        }
    }
    else 
        echo "There are no records";
}   
else 
    echo "There is an unxpented error try again later";


echo json_encode($result_arr);

mysqli_free_result($result);

mysqli_close($conn);
?>

