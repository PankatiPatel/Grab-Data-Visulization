<?php
 include("dbconfig.php"); 

$result_arr = array(); 

$sql = "SELECT RecordNumber, Zipcode, ZipCodeType, City, State, LocationType, Latitude, Longitude, 
               Country, TaxReturnsFiled, EstimatedPopulation, TotalWages, AvgWages  FROM datamining.vDV_Data2"; 
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