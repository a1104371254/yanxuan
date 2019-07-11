<?php
require "conn.php";

if(isset($_POST['name'])){
	$username=$_POST['username'];
	$password=md5($_POST['password']);
}else{
	echo ('非法操作');
}

$query="select * from zhuce where user_email='$username' and user_pwd='$password'";
$result=mysql_query($query);

if(mysql_fetch_array($result)){
	echo true;
}else{
	echo false;
}