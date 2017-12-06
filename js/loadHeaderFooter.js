define(["jquery","cookie"],function(){
	// $(".header").load("../html/include/header.html",function(){
		// console.log(1)
	// });
	$.ajax("/letao/html/include/header.html").done(function(data){
		$(".header").html(data);
	}).done(function(){});
	$(".footer").load("/letao/html/include/footer.html",function(){
		
	});
});