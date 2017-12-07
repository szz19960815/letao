<?php

	$id = $_POST["pro_id"];
	// $id = 3;

	/* 连接数据库，判断 */
	mysql_connect("localhost:3306", "root", "");
	// 设置读/写库时的编码
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	// 选择数据库
	mysql_select_db("letao");

	$sql = mysql_query("INSERT INTO szz_cart(product_id) VALUES('$id')");
	// $result = mysql_fetch_array($sql,MYSQL_ASSOC);
	if($sql){
		echo $id;
		echo "<script>alert('添加成功！'); window.location.href = 'http://localhost/letao/html/cart.html'</script>";
	}else{
		echo  "<script>alert('添加失败！'); window.location.href = 'http://localhost/letao/html/add_cart.html'</script>";
	}

?>