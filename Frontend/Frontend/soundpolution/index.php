<?php

/*Format string: http://soundpolution-aphelloworld.rhcloud.com ++ "location=" + location + "&arduino_id=" + arduino_id + "&data=" + _data;*/

$servername = getenv('OPENSHIFT_MYSQL_DB_HOST').":".getenv('OPENSHIFT_MYSQL_DB_PORT');
$username = getenv('OPENSHIFT_MYSQL_DB_USERNAME');
$password = getenv('OPENSHIFT_MYSQL_DB_PASSWORD');
$dbname = getenv('OPENSHIFT_GEAR_NAME');

// Create connection
$con = $con = mysql_connect($servername, $username, $password);
// Check connection
if (!$con) {
    die("Connection failed: " . mysql_error());
} 
mysql_select_db($dbname,$con);


switch ($_POST['function']) {
	case 'getMetingen':
		getMetingen();
		break;
	
	case 'getDevices':
		getDevices();
		break;

	default:
		echo "Nothing to see here";
		break;
}

function getMetingen(){
	var verdieping = $_POST¨['Verdieping'];
	$query = "SELECT x FROM Metingen WHERE Verdieping = verdieping";
	$sql= mysql_query($query);

	while ($row = mysql_fetch_assoc($sql)) {
		$out[]=$row;
}

function getDevices(){
    $query = "SELECT * FROM Devices";
	$sql= mysql_query($query);

	while ($row = mysql_fetch_assoc($sql)) {
		$out[]=$row;
}

print(json_encode($out));

mysql_close($con);

?>
