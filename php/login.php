<?php
require "conn.php";
// echo 123;
// if(isset($_POST['username']) && isset($_POST['password'])){//如果接收到传来的值;
// 	echo($_POST['username']);
//     $user=$_POST['username'];
// 	$pass=sha1($_POST['password']);


//     $result=$mysqli->query("select * from zhuce where user_email='$user' and user_pwd='$pass'");//去数据库里匹配相应的值

//     if($result->fetch_assoc()){//登录成功
//         echo true;
//     }else{//登录失败
//         echo false;
//     }

// }
// echo 456;
if(isset($_POST['name'])){
	$username=$_POST['name'];
	$password=md5($_POST['pass']);
}else{
	exit('caozuo shibai');
};
$query="select * from  zhuce where user_email='$username'and user_pwd='$pass'";
$result=mysqli_query($query);
if(mysqli_fetch_array($result)){
	echo true;
}else{
	echo false;
}