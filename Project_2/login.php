<?php
    session_start();

    include ("dbconfig.php"); 

    if(isset($_POST["login"]) && isset($_POST["pass"])){
        $login = $_POST["login"];
        $pswd =  $_POST["pass"];
    }
  
    $sql = "SELECT * FROM datamining.DV_User WHERE login =  '$login' "; 

    $result = mysqli_query($conn,$sql); 
    $numRows = mysqli_num_rows($result); 
    $row = mysqli_fetch_assoc($result);
    $data = [];

    if($result)
    {
        if($numRows > 0 )
        {
            if($pswd == $row["password"] )
            {   
                    unset($_COOKIE['msg']);
                     setcookie("msg",'', time() - (60*100), "/");
                     setcookie("msg",'Welcome User '. $row["name"], time()+ (60*100), "/");
                     setcookie("id", $row["uid"], time()+ (60*100) , "/");
                     setcookie("name", $row["name"], time()+  (60*100), "/");
                     setcookie("gender", $row["gender"],time()+  (60*100), "/");
                     setcookie("login", $row["login"],time()+  (60*100), "/");
                     
             }
             else 
                    setcookie("msg", "Incorrect Username/Password", time()+ (60*100), "/");
        }
       else 
         setcookie("msg", "Incorrect Username/Password",time()+ (60*100), "/");
    }     

    
       

        mysqli_free_result($result);
        
        mysqli_close($conn);

        header("location: index.php");
        
?>