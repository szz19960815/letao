<?php
	session_start();
	$user = $_SESSION['user'];
	$password = $_SESSION['password'];
	$rs_ql = $_SESSION['username'];
	echo $rs_ql;
?>