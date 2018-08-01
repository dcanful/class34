
$(function(){

	if( $("#body_container.main").length ){
		class34.main.init();
	}

	if( $("#body_container.inf").length ){
		class34.inf.init();
	}

	if( $("#body_container.foo").length ){
		class34.foo();
	}

});

var class34 = {}



/*
*	404 error
*/
class34.notFound = function(){
	alert('이 페이지는 현재 작업중입니다.');
	return false;
}


/*
*	main
*/
class34.main = {
	init : function(){
		this.section01();
		this.popup();
	},
	section01 : function(){
		var $section = $(".content_section .content01");
		var startPos = $("body").height()/2-50;

		$section.css({opacity:0});

		$(window).on("scroll", function(){
			var nowScrl = $(this).scrollTop();
			if(nowScrl > $section.offset().top-startPos){
				$section.css({opacity:1});
				$section.addClass("animated fadeInDown");
			}
		});
	},
	popup : function(){
		var $section = $(".content_section .content01");
		var $btn = $section.find(".btn a");
		var $popup = $(".content_section .popup");
		var $dimmed = $popup.find(".dimmed");

		var swiperFlag = false;
		$btn.on({
			"mouseover" : function(){
				$(this).parent().addClass("hover");
			},
			"mouseleave" : function(){
				$(this).parent().removeClass("hover");
			},
			"click" : function(){
				$popup.show();
				$popup.find(".dimmed").addClass("animated fadeIn");
				$popup.find(".inner img").addClass("animated scaleUp");
				if( !swiperFlag ){
					console.log(3)
					var swiper01 = new Swiper ('.popup .swiper-container', {
						navigation: {
							nextEl: '.popup .swiper-button-next',
							prevEl: '.popup .swiper-button-prev',
						},
						pagination: {
							el: '.swiper-pagination'
						}
					});
					swiperFlag = true;
				}
				return false;
			}
		});
		$dimmed.on({
			"click" : function(){
				$popup.hide();
				$popup.find(".dimmed").removeClass("animated fadeIn");
				$popup.find(".inner img").removeClass("animated scaleUp");
				return false;
			}
		});
	}
}


/*
*	inf
*/
class34.inf = {
	init : function(){
		var _this = this;
		var $section02 = $(".content_section .section02");
		var $section04 = $(".content_section .section04");
		var $section06 = $(".content_section .section06");
		var $section07 = $(".content_section .section07");
		var $section10 = $(".content_section .section10");

		// init
		$section02.find(".ct01, .ct02").css({opacity:0});
		$section04.find(".layer").css({opacity:0});
		$section06.find(".ct01, .ct02").css({opacity:0});
		$section07.find(".layer").css({opacity:0});
		$section10.find(".layer").css({opacity:0});

		$(window).on("scroll", function(){
			var nowScrl = $(this).scrollTop();
			var startPos = $("body").height()/2-50;

			// 동작 :: section02
			if( nowScrl > $section02.offset().top-startPos ){
				_this.motion($section02.find(".ct01, .ct02"), "scaleUp");
			}
			// 동작 :: section04
			if( nowScrl > $section04.offset().top-startPos ){
				_this.motion($section04.find(".layer"), "fadeIn");
			}
			// 동작 :: section06
			if( nowScrl > $section06.offset().top-startPos ){
				_this.motion($section06.find(".ct01, .ct02"), "scaleUp");
			}
			// 동작 :: section07
			if( nowScrl > $section07.offset().top-startPos ){
				_this.motion($section07.find(".layer"), "fadeIn");
			}
			// 동작 :: section10
			if( nowScrl > $section10.offset().top-startPos ){
				_this.motion($section10.find(".ct01, .ct02, .ct03"), "fadeInDown");
				_this.motion($section10.find(".girl"), "fadeInRight");
			}
		});
	},
	motion : function(el, motionType){
		el.css({opacity:1}).addClass("animated " + motionType);
	}
}


/*
*	foo
*/
class34.foo = function(){
	var $content01 = $(".content_wrap01");
	var $layer = $content01.find(".layer");
	$layer.css({opacity:0});
	$(window).on("scroll", function(){
		var nowScrl = $(this).scrollTop();
		var bodyHalf = $("body").height()/2;
		if( nowScrl > $content01.offset().top-bodyHalf ){
			$layer.addClass("animated fadeIn");
		}
	});
}