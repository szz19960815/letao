require(["config"],function(){
		require(["jquery","loadHeaderFooter"],function(){
		});
	});

require(["config"],function(){
	require(["jquery","template"],function(){
		$(function(){
			$.getJSON("/letao/mock/zone.json", function(responseData){
				responseData.data = responseData.data.slice(0,4);
				var data = {
					zones : responseData.data
				};
				var html = template("zone_list", data);
				
				$(".seckill_bottom").html(html);
			});
		});
	});
});



require(["config"],function(){
		require(["jquery","template"],function(){
			index_img("/letao/mock/sport.json", "index_data", $(".con3_body"));
			index_img("/letao/mock/man.json", "index_data", $(".con4_body"));
			index_img("/letao/mock/women.json", "index_data", $(".con5_body"));
	});
});

function add_cart() {
	if($(".links ul li #login1").css("display") === "none"){
		window.location.href="/letao/html/add_cart.html";
	}else{
		alert("请先登录！");
		window.location.href="/letao/html/login.html"; 
	}
	
}

function index_img(url,tem,target){
	$(function(){
		$.getJSON(url, function(responseData){
			var data = {
					datas : responseData.data
				};
 			var html = template(tem, data);				
			target.html(html);
		});
	});
		
}