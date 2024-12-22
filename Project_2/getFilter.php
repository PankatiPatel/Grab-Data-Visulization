<?php
 include("dbconfig.php"); 

 if(isset($_COOKIE["id"]))
    $id = $_COOKIE['id'];

$result_arr = array(); 

$sql = "SELECT * FROM 2022F_patpanka.User_Setting WHERE uid = '$id'";
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

