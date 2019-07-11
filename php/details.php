 <?php
    // require "conn.php";
    // if(isset($_GET['sid'])){
    // $id=$_GET['sid'];
    // $result=$mysqli->query("select * from xinpinshoufa where sid='$id'");
    // echo json_encode($result->fetch_assoc());
// }


include ('conn.php');
if(isset($_GET['sid'])){
    $id=$_GET['sid'];
$sql="select * from xinpinshoufa where sid='$id'";
$res=$mysqli->query($sql);
$arr = array();
    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);
    
    echo $json;

    $mysqli->close();
}

;