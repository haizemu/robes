$(function(){
	$(window).scroll(function(){
		// var top=$(document).scrollTop();
//		if($(".header").offset().top - $(window).scrollTop()<600&&$(".header").offset().top - $(window).scrollTop()>0){
//			$(".header").css({
//				"opacity":"1",
//				"top":"0px"
//			});
//		}
		if($(".bb1").offset().top - $(window).scrollTop()<600&&$(".bb1").offset().top - $(window).scrollTop()>"-"+400){
			$(".bb1").css({
				"opacity":"1",
				"left":"0px"
			});
		}
		if($(".bb2").offset().top - $(window).scrollTop()<300&&$(".bb2").offset().top - $(window).scrollTop()>"-"+700){
			$(".bb2").css({
				"opacity":"1",
				"top":"0px"
			});
		}
		if($(".bb3").offset().top - $(window).scrollTop()<600&&$(".bb3").offset().top - $(window).scrollTop()>"-"+400){
			$(".bb3").css({
				"opacity":"1",
				"left":"0px"
			});
		}
		if($(".footerTop").offset().top - $(window).scrollTop()<900&&$(".footerTop").offset().top - $(window).scrollTop()>"-"+200){
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