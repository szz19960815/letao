<?php

$name = $_POST['name'];
$password = $_POST['password'];

/* 连接数据库，判断 */
	mysql_connect("localhost:3306", "root", "");
	// 设置读/写库时的编码
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	// 选择数据库
	mysql_select_db("letao");

	$sq = "SELECT * FROM userinfo where name='$name'";
	$rs = mysql_fetch_array(mysql_query($sq),MYSQL_ASSOC);

	if($rs){
		echo "该用户已被注册！";
	}else{
		$sql = "INSERT INTO userinfo(name,password,phone) VALUES ('$name','$password','$name')";
		$result = mysql_query($sql);

		if($result){
			echo "success";
		}else{
			echo "failed";
		}
	}
mysql_close();

?>