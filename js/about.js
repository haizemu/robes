$(function(){
	$(window).scroll(function(){
		// var topp=$(document).scrollTop();
//		if($(".header").offset().top - $(window).scrollTop()<600&&$(".header").offset().top - $(window).scrollTop()>0){
//			$(".header").css({
//				"opacity":"1",
//				"top":"0px"
//			});
//		}
		if($(".sec2Left").offset().top - $(window).scrollTop()<600&&$(".sec2Left").offset().top - $(window).scrollTop()>"-"+200){
			$(".sec2Left").css({
				"opacity":"1",
				"left":"0px"
			});
		}
		if($(".aTop").offset().top - $(window).scrollTop()<600&&$(".sec2Left").offset().top - $(window).scrollTop()>"-"+200){
			$(".aTop").css({
				"left":"0px"
			});
		}
		if($(".aBottom").offset().top - $(window).scrollTop()<600&&$(".sec2Left").offset().top - $(window).scrollTop()>"-"+200){
			$(".aBottom").css({
				"left":"0px"
			});
		}
		if($(".js").offset().top - $(window).scrollTop()<600&&$(".sec2Left").offset().top - $(window).scrollTop()>"-"+200){
			$(".js1").css({
				"opacity":"1",
				"left":"0px"
			});
			$(".js2").css({
				"opacity":"1",
				"top":"0px"
			});
			$(".js3").css({
				"opacity":"1",
				"left":"0px"
			});
		}
		if($(".sec2Right").offset().top - $(window).scrollTop()<600&&$(".sec2Right").offset().top - $(window).scrollTop()>"-"+200){
			$(".sec2Right").css({
				"opacity":"1",
				"left":"0px"
			});
		}
		if($(".footerTop").offset().top - $(window).scrollTop()<600&&$(".footerTop").offset().top - $(window).scrollTop()>"-"+200){
			$(".footerTop").css({
				"opacity":"1",
				"top":"0px"
			});
		}
		if($(".footerBottom").offset().top - $(window).scrollTop()<600&&$(".footerBottom").offset().top - $(window).scrollTop()>"-"+200){
			$(".footerBottom").css({
				"opacity":"1",
				"top":"0px"
			});
		}
	})

})
$(document).ready(function(){
	$(".header").css({
		"opacity":"1",
		"top":"0px"
	});
	$(".abanner .contain>h2").css({
		"opacity":"1",
		"left":"0px"
	});
	$(".abanner img").css({
		"opacity":"1"
	});
	$(".a11").click(function(){
		$(".menu").toggle();
	});
})
$(function(){
	$(".s2img>img").click(function(){
		$(".kk").show();
		$(".tu").append($(this).clone());
		$("body").css("overflow","scroll");
		$("body").css("overflow-x","hidden");
		$("body").css("overflow-y","hidden");
	});
	$(".guan").click(function(){
		$(".kk").hide();
		$(".tu").empty();
		$("body").css("overflow","auto");
		$("body").css("overflow-x","auto");
		$("body").css("overflow-y","auto");
	});
})