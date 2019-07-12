<?php
	require "conn.php";//引入数据库连接的文件
	
	if(isset($_POST['email']) || isset($_POST['submit'])){
		$email=@$_POST['email'];
		echo $email;
	}else{
		exit('非法操作');
	}
	
	$query="select * from zhuce where user_email='$email'";
	$result=mysql_query($query);
	
	if(mysql_fetch_array($result)){//如果有值代表用户名存在。
		echo 'false';//有重复
	}else{
		echo 'true';//没有重复
	}
	//2.如果单击注册按钮,按钮的值为注册,将表单的值添加的数据库.
	if( isset($_POST['submit'])){
		$user=$_POST['phone'];//username：表单的名称
		$pass=md5($_POST['password']);
		$email=$_POST['email'];
		//添加语句
		$query="insert user(uid,username,user_email,regdate) values(null,'$user','$pass','$email',user_pwd,NOW())";
		mysql_query($query);
		// echo '输出成功';
		header('location:../src/_index.html');//页面的跳转
	}