$(document).ready(function(){
	$(".bannerText>a>img").css("opacity","1");
	$(".bTitle").css("left","0px");
})
//$(function(){
//	var bool = true;
//		$(window).scroll(function(){
//		var top = $(document).scrollTop();
//			if(top>50){
//				if(bool){
//					$(".header").css({
//						"top":"0px",
//						"opacity":"1"
//					});
//					bool=false;
//				}
//			}
//	})
//})
$(function(){
	$(window).scroll(function(){
		var topp=$(document).scrollTop();
		if($(".header").offset().top - $(window).scrollTop()<600&&$(".header").offset().top - $(window).scrollTop()>200){
			$(".header").css({
				"opacity":"1",
				"top":"0px"
			});
		}
		else if($(".nav1").offset().top - $(window).scrollTop()<600&&$(".nav1").offset().top - $(window).scrollTop()>"-"+200){
			$(".nav1").css({
				"opacity":"1",
				"left":"0px"
			});
		}
		if($(".sec1").offset().top - $(window).scrollTop()<500&&$(".sec1").offset().top - $(window).scrollTop()>"-"+400){
			$(".sec1").css({
				"opacity":"1",
				"left":"0px"
			});
		}
		if($(".sec2Left").offset().top - $(window).scrollTop()<600&&$(".sec2Left").offset().top - $(window).scrollTop()>"-"+200){
			$(".sec2Left").css({
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
		if($(".footerTop").offset().top - $(window).scrollTop()<700&&$(".footerTop").offset().top - $(window).scrollTop()>"-"+200){
			$(".footerTop").css({
				"opacity":"1",
				"top":"0px"
			});
		}
		if($(".footerBottom").offset().top - $(window).scrollTop()<400&&$(".footerBottom").offset().top - $(window).scrollTop()>"-"+200){
			$(".footerBottom").css({
				"opacity":"1",
				"top":"0px"
			});
		}
	})
})
$(function(){
	$(".nav1>li").click(function(){
		$(".nav1>li").removeClass("nactive");
		$(this).addClass("nactive");
		var i = $(this).val();
		$(".s1").css("opacity","0");
		$(".s1")[i].style.opacity="1";
	})
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