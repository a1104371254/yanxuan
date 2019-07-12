<?php
header('content-type:text/html;charset=utf-8');
define('HOST','localhost');
define('USERNAME','root');
define('PASSWORD','');
define('DBNAME','yanxuan');
$mysqli=@new mysqli(HOST,USERNAME,PASSWORD,DBNAME);
if($mysqli->connect_error){
	die('数据库连接失败'.$mysqli->connect_error);
};
$mysqli->query('SET NAMES UTF8');