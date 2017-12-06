//页面载入后加入验证码
code_img();
		//点击图片时刷新验证码
$("#code").on("click",function(){
		code_img();
});

//调用接口生成验证码
function code_img(){
	$.ajax({
		type:"get",
		url:"http://route.showapi.com/26-4",
		data:{
			showapi_appid:"51523",
			showapi_sign:"53b0033f69bd4a6489c8f38c7ee1b9e6"
		},
		dataType:"json",
		success:function(data){
			var html = `<img style="width: 100%;height: 100%" src="${data.showapi_res_body.img_path}">`;
			$("#code").html(html);
			$("#code_value").val(data.showapi_res_body.text);
		}
	});
}

var name,password;

$("#phone").on("blur",function(){
		var user = $("#phone").val();
		
		

	if(user === ""){
		console.log($("#phone").next());
		$("#phone").next().html("请输入手机号或用户名！");
	}else{
		$("#phone").next().html("");
		$.ajax({
			type:"post",
			url:"/letao/php/user_validation.php",
			data:{name:user,phone:user},
			success:function(data){
				$("#phone").next().html(data);
				if(data === "可以使用"){
					name = user;
				}
			}
		});
	}
});

$("#sure").on("blur",function(){
	var pass = $("#password").val();
	var sure = $("#sure").val();
	if(pass === ""){
		$("#password").next().html("请输入密码");
	}else{
		if(pass === sure){
			$("#sure").next().html("");
			password = pass;
			console.log("pass:" + password);
		}else{
			$("#sure").next().html("两次密码输入不一致");
		}
	}
});

$("#sub").on("click",function(){
	var img_code = $("#img_code").val();
	var code_value = $("#code_value").val();
	if(img_code === "" || img_code !== code_value){
		$("#img_code").next().html("验证码输入错误");
		$("#img_code").val("");
		code_img();
	}else{
		var register = {
			name : name,
			password : password
		};
		$.ajax({
			url:"/letao/php/register.php",
			type:"post",
			data:register,
			success:function(data){
				if(data === "success"){
					alert("注册成功！");
					window.location.href = 'http://localhost/letao/html/login.html' ; 
				}else if(data === "failed"){
					alert("注册失败！")
					window.location.href = 'http://localhost/letao/html/register.html' 
				}else if(data === "该用户已被注册"){
					alert(data);
					location.reload();
				}
			}
		});
	}
});