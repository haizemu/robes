$(function(){
	$(window).scroll(function(){
		// var top=$(document).scrollTop();
		if($(".gg1").offset().top - $(window).scrollTop()<600&&$(".gg1").offset().top - $(window).scrollTop()>0){
			$(".gg1").css({
				"opacity":"1",
				"top":"0px"
			});
		}
		if($(".gg2").offset().top - $(window).scrollTop()<600&&$(".gg2").offset().top - $(window).scrollTop()>0){
			$(".gg2").css({
				"opacity":"1",
				"top":"0px"
			});
		}
		if($(".gg3").offset().top - $(window).scrollTop()<600&&$(".gg3").offset().top - $(window).scrollTop()>0){
			$(".gg3").css({
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
$(function(){
    $(".gt img").click(function(){
        $(".gkk").fadeIn(function(){
            $(".gcon").css("opacity","1");
        });
        $(".tu").append($(this).parent().prev().clone());
        $("body").css("overflow","scroll");
		$("body").css("overflow-x","hidden");
		$("body").css("overflow-y","hidden");
    });
    $(".gcon img").click(function(){
		$(".gkk").fadeOut(function(){
            $(".gcon").css("opacity","0");
        });
		$(".tu").empty();
		$("body").css("overflow","auto");
		$("body").css("overflow-x","auto");
		$("body").css("overflow-y","auto");
	});
})