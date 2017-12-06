//加载头尾
require(["config"],function(){
		require(["jquery","loadHeaderFooter"],function(){
		});
	});

// 加载放大镜插件
require(["config"],function(){
	require(["jquery","zoom"],function($){
		console.log($("big_img"));
		$(".big_img img").elevateZoom();
	});
});