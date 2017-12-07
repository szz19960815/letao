//加载头尾
require(["config"],function(){
		require(["jquery","loadHeaderFooter"],function(){
		});
	});

// 加载放大镜插件
require(["config"],function(){
	require(["jquery","zoom"],function($){
		$(".big_img img").elevateZoom();
	});
});

$(".small_img li").eq(0).children().css("border","1px solid red");
var product = "";
function get_product(){
	product = $(".big_img img").attr("src").slice(0,16);
}
//切换大图图片
$(".small_img li a").on("click","img",function(){
	$(this).parent().css("border","1px solid red");
	// console.log($(this).parent().parent().siblings().children());
	$(this).parent().parent().siblings().children().css("border","1px solid white");
	$(".big_img img").attr("src",$(this).attr("src"));
	//console.log("src"+$(this).attr("src"));
	// 加载放大镜插件
	require(["config"],function(){
		require(["jquery","zoom"],function($){
			$(".big_img img").elevateZoom();
		});
	});
	get_product();
});

//计时器
var endTime = new Date("2017-12-13T00:00:00");
var end_time = endTime.getTime();
var timer = setInterval(function(){
	var now_time = Date.now();
	var diff = end_time - now_time;
	var date = new Date(now_time);
	var _Day = ("0" + Math.floor(diff / 86400000)).slice(-2);
	var H = ("0" + Math.floor((diff % 86400000) / 3600000)).slice(-2);
	var M = ("0" + Math.floor((diff % 3600000) / 60000)).slice(-2);
	var S = ("0" + (String(Math.floor((diff % 3600000) % 60000))).slice(0,2)).slice(-2);
	
	//设置倒计时在页面中的显示
	$("#days").html(_Day);
	$("#hours").html(H);
	$("#minutes").html(M);
	$("#seconds").html(S);
},1000);

//将商品添加到购物车的方法
console.log($("#addTo_cart"));
$("#addTo_cart").on("click",function(){
	_add();
});
function _add(){
	get_product(); 
	require(["config"],function(){
		require(["jquery","template"],function(){
			$(function(){
				$.getJSON("/letao/mock/zone.json", function(responseData){
					for(var i=0;i<responseData.data.length;i++){
						if(responseData.data[i].img.slice(0,16) === product.slice(0,16)){
							console.log(responseData.data[i]);
							var pro_id = responseData.data[i].id;

							$.ajax({
								url:"/letao/php/add_cart.php",
								type:"post",
								data:{pro_id:pro_id},
								success:function(data){
									window.location.href="/letao/php/add_cart.php";
									return;
								}
							});
							break;
						}
					}
				});
			});
		});
	});
}