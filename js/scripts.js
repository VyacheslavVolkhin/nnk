$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};

    //animation
    let sTopA = $(window).scrollTop() + $(window).innerHeight() - 300;
    $('.steps-box').each(function () {
        if ($(this).offset().top < sTopA) {
            $(this).addClass('active')
        }
    })

    $(window).scroll(function () {
        let sTopA = $(window).scrollTop() + $(window).innerHeight() - 300;
        $('.steps-box').each(function () {
            if ($(this).offset().top < sTopA) {
                $(this).addClass('active')
            }
        })
    });


    


    //counter
    let sTop = $(window).scrollTop() + $(window).innerHeight();
    $('.js-digit:not(.activated)').each(function () {
        if ($(this).offset().top < sTop) {
            $(this).addClass('activated');
            $(this).prop('Counter', $(this).data('from')).animate({
                Counter: $(this).attr('data-count')
            }, {
                duration: 3000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now))
                }
            })
        }
    })

    $(window).scroll(function () {
        var sTop = $(window).scrollTop() + $(window).innerHeight();
        $('.js-digit:not(.activated)').each(function () {
            if ($(this).offset().top < sTop) {
                $(this).addClass('activated');
                $(this).prop('Counter', $(this).data('from')).animate({
                    Counter: $(this).attr('data-count')
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now))
                    }
                })
            }
        })
    });
    
    
    //popup close
    $('.js-popup-close').on('click', function(){
        $('.fancybox-button.fancybox-close-small').click();
        return false;
    })
    
	
    //popup block
	$('.js-popup-wrap .js-btn-toggle').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('menu-show');
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
			if ($(this).parent().hasClass('popup-menu-wrap')) {
				$('body').addClass('menu-show');
			}
		}
		return false;
	})
	$('.js-popup-wrap .js-btn-close').on('click', function() {
		$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
		$('body').removeClass('menu-show');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    $('body').removeClass('menu-show');
	    event.stopPropagation();
	});
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select')) {
			// alert(1)
			if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
				$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
			}
			var currentSelect = $(this).find('.js-popup-block').find('.active').html();
			$(this).find('.js-btn-toggle').html(currentSelect);
		}
	})
	$('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
			$(this).addClass('active');
		}
		$('.js-popup-wrap').each(function() {
			if ($(this).hasClass('js-popup-select')) {
				if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
					$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
				}
				var currentSelect = $(this).find('.js-popup-block').find('.active').html();
				$(this).find('.js-btn-toggle').html(currentSelect);
			}
		})
		$(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
		return false;
	})

	//tabs
	$('.js-tabs-nav').each(function() {
		$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
	})
	$('.js-tab-title').each(function() {
		if ($(this).hasClass('active')) {
			$(this).next('.js-tab-content').show(0);
		}
	})
	$('.js-tabs-nav li a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.js-tab-block').removeClass('active');
			$(this).parents('.js-tabs-nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.js-tabs-nav').each(function() {
				$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
			})
		}
		return false;
	})
	$('.js-tab-title').on('click' , function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.js-tab-content').slideUp(200);
		} else {
			$(this).addClass('active').next('.js-tab-content').slideDown(200);
		}
	})


    //item-tile-video
    /*$('.js-btn-video').on('click', function () {
        let videoURL = $(this).parent('.item-tile-video').attr('data-video');
        $(this).parents('.item-tile-video').addClass('active');
        $(this).parents('.item-tile-video').append('<iframe width="100%" height="100%" src="' + videoURL + '" frameborder="0" allowfullscreen></iframe>')
        return false;
    })*/

    
    //tile-service
    $('.item-tile-service .button-show').on('click', function() {
        $(this).parents('.item-tile-service').addClass('tile-open').find('.tile-outer-wrap').slideDown(200);
        return false;
    })
    $('.item-tile-service .button-hide').on('click', function() {
        $(this).parents('.item-tile-service').removeClass('tile-open').find('.tile-outer-wrap').slideUp(200);
        return false;
    })

    //partners-box
    if (!!$('.partners-box').offset()) {
        $('.partners-box .slider').slick({
            dots: false,
            slidesToShow: 4,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            autoplay: true,
            autoplaySpeed: 1000,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }

    //events-box
    if (!!$('.events-box').offset()) {
        $('.events-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
    }
});
$(window).on('load', function () {

    //animate anchor scroll
    $('.js-anchor-button').on("click", function (e) {
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 20
        }, 1000);
        e.preventDefault();
        return false;
    });
    
});