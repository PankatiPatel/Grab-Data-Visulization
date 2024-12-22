<?php
  
  include "dbconfig.php";


  if(isset($_POST['email']))
    $to = $_POST["email"];


    $subject = $_COOKIE['login']. " DV Prefrences";

    $msg = 'Avg Population Range: '. $_COOKIE['avgLowValue']. '-'. $_COOKIE['avgHighValue']. '\n'. 
           'Estimated Population Range: '. $_COOKIE['popLowValue']. '-'. $_COOKIE['popHighValue']; 



    $headers = array(
                'From' => 'Pankati Patel <patpanka@kean.edu>',
                'Cc' => 'patpanka@kean.edu',
                'X-Mailer' => 'PHP/' . phpversion()
    );

mail($to, $subject, $msg, $headers);

setcookie("msgEmail",'Email Sent', time()+ (60*100), "/");

header("location:index.php");
?>