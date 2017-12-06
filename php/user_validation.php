<?php

	$name = $_POST['name'];
	$phone = $_POST['phone'];

	/* 连接数据库，判断 */
	mysql_connect("localhost:3306", "root", "");
	// 设置读/写库时的编码
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	// 选择数据库
	mysql_select_db("letao");
	//sql语句
	$sql = "SELECT * FROM userinfo WHERE name='$name' OR phone='$phone'";
	$result = mysql_query($sql);
	$rs = mysql_fetch_array($result,MYSQL_ASSOC);

	if($rs){
		echo "该用户已存在";
	}else{
		echo "可以使用";
	}

	mysql_close();

?>