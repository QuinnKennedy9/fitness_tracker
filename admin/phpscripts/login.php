<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');


$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['email']) && empty($_POST['password'])) die();


function checkUser($email,$password){
	include('connect.php');
	$email = mysqli_real_escape_string($link, $email);
    $password = mysqli_real_escape_string($link, $password);
    $loginstring = "SELECT * FROM tracker_users WHERE user_email='{$email}'";
    $user_set = mysqli_query($link, $loginstring);
    if(mysqli_num_rows($user_set)){
        $founduser = mysqli_fetch_array($user_set, MYSQLI_ASSOC);
        $encryptedpass = $founduser['user_password'];
        $name = $founduser['user_name'];
        if(password_verify($password, $encryptedpass)){
            $message = $name;
            return $message;
        }else{
            $message = "unsuccesful login";
            return $message;  
        }
    }else{
        $message = "unsuccesful login";
        return $message;
    }
    mysqli_close($link);
}


if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);


	// data

	$email = $_POST['email'];
    $password = $_POST['password'];
    
    $response = checkUser($email, $password);
    
    //return $response;

	echo $response;
	}
else
	{

	// tell the user about error

	echo "Something went wrong";
	}

?>




