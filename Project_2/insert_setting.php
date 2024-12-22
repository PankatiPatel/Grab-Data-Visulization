<?php

include "dbconfig.php"; 
date_default_timezone_set("America/New_York"); 

if(isset($_COOKIE['avgHighValue']))
    $avgHigh = $_COOKIE["avgHighValue"];

if(isset($_COOKIE["avgLowValue"]))
   $avgLow = $_COOKIE["avgLowValue"];

if(isset($_COOKIE["popHighValue"]))
    $popHigh = $_COOKIE["popHighValue"];

if(isset($_COOKIE["popLowValue"]))
    $popLow = $_COOKIE["popLowValue"]; 

if(isset($_COOKIE["id"]))
    $uid = $_COOKIE["id"];

if(isset($_COOKIE["login"]))
    $login = $_COOKIE["login"];

$sql = "SELECT * FROM 2022F_patpanka.User_Setting"; 
$result = mysqli_query($conn,$sql);
$numRows = mysqli_num_rows($result);

if($result)
{
    if($numRows > 0)
    {
        $sql = "UPDATE User_Setting SET avgWagesHigh = '$avgHigh', avgWagesLow = '$avgLow', estPopulationHigh = '$popHigh', estPopulationLow = '$popLow', time = NOW() WHERE uid = '$uid'";

                 if(mysqli_query($conn,$sql)){
                      setcookie("msgSave",'Setting Saved', time()+ (60*100), "/");
                 }
                 else {  
                     setcookie("msgSave",'Error Saving', time()+ (60*100), "/");
                 }



    }
    else 
    {
        $sql = "INSERT INTO User_Setting VALUES ('$uid','$login','$avgHigh', '$popHigh','$avgLow', '$popLow', NOW())";

        if(mysqli_query($conn,$sql)){
            setcookie("msgSave",'Setting Saved', time()+ (60*100), "/");

        }
           
        else    
           setcookie("msgSave",'Error Saving', time()+ (60*100), "/");
    }
}
else 
    echo "error";

    header("location:index.php");
?>