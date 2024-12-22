
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Project 1 </title>


        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/> 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script  type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script  src="validation.js"></script>
        <link href="style.css" rel="stylesheet" type="text/css"/>


        <script>  
          function check_cookie_name()
          {
            
           
            
             <?php  if(isset($_COOKIE['id'])):?>
                      alert ("Name: <?php echo $_COOKIE['name']; ?> \n" + 
                            "UID:  <?php echo $_COOKIE['id'] ?> \n" + 
                            "Login:<?php echo $_COOKIE['login'] ?> \n" +
                            "Gender: <?php echo $_COOKIE['gender']  ?>" ); 
                 <?php else: ?>
                      alert("Login First");

              <?php endif;?>
              
               
    
          }
          function clientInfo()
        
          {
              var OSName = "Unknown OS";
              if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
              if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintosh";
              if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
              if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android";
              if (navigator.userAgent.indexOf("like Mac") != -1) OSName = "iOS";
 
              alert("Browser Code  Name: " + navigator.appCodeName + "\n" + 
                    "\nBrowser Name: " + navigator.appName + "\n" + 
                    "\nBrowser Version: " + navigator.appVersion +"\n" + 
                    "\nCookies Enabled: " + navigator.cookieEnabled + "\n" + 
                    "\n Java Enabled:  " + navigator.javaEnabled() + "\n" +
                    "\n OS: " + OSName );
          }
        </script> 

    </head>

    <body> 

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    File
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#" id="load-file" onclick="document.getElementById('file').click();"  >Load CSV File</a>
                    <input type="file" style="display:none;" id="file" name="file" onchange="csvLoad();" />
                    <a class="dropdown-item" data-toggle="modal" data-target="#modalLoginForm" >Login to DB</a> 
                    <a class="dropdown-item" href="#" onclick = "logout();" >Logout DB</a>
                    <a class="dropdown-item" href="#" onclick = "exit();">Exit</a>
                  </div>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      View
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                      <a class="dropdown-item" href="#" id="line">Line</a>
                      <a class="dropdown-item" href="#" id = "pie">Pie</a>
                      <a class="dropdown-item" href="#" id = "bar">Bar</a>
                      <a class="dropdown-item" href="#" id="map" >Map</a>
                    </div>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Setting
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#" onclick = "check_cookie_name();">UserInfo</a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Help
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#" onclick = "myInfo();">Info</a>
                      <a class="dropdown-item" href="#" onclick = "clientInfo();">Client</a>
                      <a class="dropdown-item" href="Project-1-Electric-Car-Population.pdf" ">Project Proposal</a>
                    </div>
                  </li>
              </ul>
                <p id ="file-error-msg" style = "margin-left: 6vw;""></p>
                </div>             
            </div>
            
          
              
          </nav>
          <br>

          <div class = "data-selection-area" style = "margin-left: 2vw;">
            <form id = "selection">
              <p> Please select one of the following choices: </p>
              <input type="radio"  name="selection" value="1">  Population by Year (Bar,Line) <br>
              <input type="radio"  name= "selection" value="2"> Population by Modle (Bar,Line) <br>
              <input type="radio"  name="selection" value="3">  Population by Type (Bar,Pie)<br>
              <br> <p> Now run the corresponsing graph in the view menu</p> <br>
            </form>
          </div>
          

          <div class = "message-area">
            <div id="chart" style = "margin-left: 37vw; margin-top: -32vh; margin-bottom: -30vh;"></div>   
         </div>

        <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header text-center">
                  <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
               <form action = "login.php" method="post" >
                <div class="modal-body mx-3">
                  <div class="md-form mb-5">
                    <i class="fas fa-envelope prefix grey-text"></i>
                    <input type="text" name="login" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="defaultForm-email"></label>
                  </div>
          
                  <div class="md-form mb-4">
                    <i class="fas fa-lock prefix grey-text"></i>
                    <input type="password" name="pass" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="defaultForm-pass"></label>
                  </div>
          
                </div>
                <div class="modal-footer d-flex justify-content-center">
                  <input type = "submit" value = "Login" class ="btn btn-default"  >

                </form>
                </div>
              </div>
            </div>
          </div>

        
          <?php if(isset($_COOKIE["msg"])): ?>
              <script> 
                document.getElementById("file-error-msg").innerHTML = " <?php echo $_COOKIE['msg']; ?> "
             </script> 
       
          <?php  endif;?>

  
     
          
              <div id="table_div" style= "margin-top: 52vh;"></div>

    </body>

 

</html>