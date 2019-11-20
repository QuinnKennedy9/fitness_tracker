<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');


$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email'])) die();

function registerUser($email,$name,$password){
	include('connect.php');
		$checkString = "SELECT * FROM tracker_users WHERE user_email = '{$email}'";
		$checkQuery = mysqli_query($link, $checkString);
		if($checkQuery == ''){
			echo 'That Email address is already in use.';
			echo $checkString;
		}else{
    		$encrypted = password_hash($password, PASSWORD_DEFAULT);
			$userstring = "INSERT INTO tracker_users (user_name, user_email, user_password) VALUES ('${name}', '${email}', '${encrypted}')";
    		$userquery = mysqli_query($link, $userstring);
    		mysqli_close($link);
		}
}

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
;

	// data

	$email = $_POST['email'];
	$name = $_POST['name'];
	$password = $_POST['password'];
	registerUser($email,$name,$password);


	// echo json_encode( $_POST );

	echo json_encode(array(
		"sent" => true
	));
	}
else
	{

	// tell the user about error

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>






if (isset($_POST['email'])) {
	$email = $_POST['email'];
	$name = $_POST['name'];
	$password = $_POST['password'];
	registerUser($email,$name,$password);
}



