<?php 

unset($_COOKIE["msg"]);
unset($_COOKIE["id"]);
unset($_COOKIE["name"]);
unset($_COOKIE["gender"]);
unset($_COOKIE["login"]);
setcookie("msg",'', time() - 60,"/");
setcookie("id",'', time() - 60,"/");
setcookie("name",'', time() - 60,"/");
setcookie("gender",'', time() - 60,"/");
setcookie("login",'', time() - 60,"/");
setcookie("avgHighValue",'', time() - 60,"/");
setcookie("estHighValue",'', time() - 60,"/");
setcookie("msgSave",'', time() - 60,"/");
setcookie("msgEmail",'', time() - 60,"/");
header("location: index.php");

?>