<?php
 
$server = "localhost";
$username = "root";
$password = "";
$dbname = "webcoding";


$con = mysqli_connect($server, $username, $password, $dbname);

if(!$con)
{
    echo "not connected";
}
$name = $_POST['name'];
$gender = $_POST['gender'];
$city = $_POST['city'];
$email = $_POST['email'];
$password = $_POST['pass'];


$sql = "INSERT INTO `test`(`name`, `gender`, `city`, `email`, `password`) VALUES ('$name','$gender','$city','$email','$password')";

$result = mysqli_query($con , $sql);

if($result)
{
    echo "data submited";
}
else{
    echo "enter right details";
}

?>