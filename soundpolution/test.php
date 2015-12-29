 <?php
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
    mysql_select_db($dbname,$con);-
   

    /*if($_GET[]!=null)
    {
    $reg = mysql_query("INSERT INTO Metingen (meting,Locatie,device_id) VALUES ('".$_GET['data']."','".$_GET['location']."','".$_GET['arduino_id']."');");
    }*/
    $func = $_GET['function'];

    switch ($_GET['function']) {
    case 'getMetingen':
        getMetingen();
    break;

    default:
    echo "Nothing to see here";
    break;
    }

    function getMetingen(){
        $verdieping = $_POST¨['Verdieping'];
        $query = "SELECT * FROM Metingen WHERE Verdieping = '$verdieping'";
        $sql= mysql_query($query);

        while ($row = mysql_fetch_assoc($sql)) {
            $out[]=$row;
        }
        print(json_encode($out));
    }
    mysql_close($con);
?>
