<?php
session_start();
// $user = 18582384076;
// $password = "admin";
$user = $_POST["user"];
$password = $_POST["password"];
$remember;
if ($_POST["remember"]) {
	$remember = $_POST["remember"];
	$_SESSION['remember'] = $remember;
}


// echo $user;
// echo $password;
	/* 连接数据库，判断 */
	mysql_connect("localhost:3306", "root", "");
	// 设置读/写库时的编码
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	// 选择数据库
	mysql_select_db("letao");
	$sql = "SELECT * FROM userinfo WHERE (name='$user' or phone='$user') AND password='$password'";
	$ql = mysql_query("SELECT name FROM userinfo WHERE (name='$user' or phone='$user') AND password='$password'");
	
	$rs_ql = mysql_fetch_array($ql,MYSQL_ASSOC);
	
	// 执行查询，返回查询结果集
	$result = mysql_query($sql);
	$rs=mysql_fetch_array($result,MYSQL_ASSOC);
	// print_r($rs);
	// 读取查询结果中的数据
	if($rs){
		$_SESSION['user'] = $user;
		$_SESSION['password'] = $password;
		$_SESSION['username'] = $rs_ql["name"];
		echo "<script type='text/javascript'>alert('登录成功!');</script>";
		echo $rs_ql["name"];
		echo  " <script> window.location.href = 'http://localhost/letao/index.html'</script>";
	}else{
		echo "<script type='text/javascript'>alert('用户名或密码错误！');</script>";
		echo  " <script language = 'javascript' type = 'text/javascript' > window.location.href = 'http://localhost/letao/html/login.html' </script>";
		
	}

	mysql_close();
?> 