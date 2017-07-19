//tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
/*搜索*/
$(function () {
  var $topsearch = $( '#top-search' ),
  $topsearchinput = $topsearch.find('input.top-search-input'),
  $body = $('html,body'),
  openSearch = function() {
    $topsearch.data('open',true).addClass('top-search-open');
    $topsearchinput.focus();
    return false;
  },
  closeSearch = function() {
    $topsearch.data('open',false).removeClass('top-search-open');
  };

  $topsearchinput.on('click',function(e) { e.stopPropagation(); $topsearch.data('open',true); });

  $topsearch.on('click',function(e) {
    e.stopPropagation();
    if( !$topsearch.data('open') ) {
      openSearch();
      $body.off( 'click' ).on( 'click', function(e) {
        closeSearch();
      });
    } else {
      if( $topsearchinput.val() === '' ) {
        closeSearch();
        return false;
      }
    }
  });
});
/*********************************************
*bootstrap panel extend
******************************************/
// panel toggle
$(document).on('click', '.panel-toggle',
function(e) {
	e && e.preventDefault();
	var $this = $(e.target),
	$class = 'collapse',
	$target;
	if (!$this.is('a')) $this = $this.closest('a');
	$target = $this.closest('.panel');
	$target.find('.panel-body').toggleClass($class);
	$this.toggleClass('active');
});

// panel remove
$(document).on('click', '.panel-remove',
function(e) {
	e && e.preventDefault();
	var $this = $(e.target),
	$class = 'collapse',
	$target;
	if (!$this.is('a')) $this = $this.closest('a');
	$target = $this.closest('.panel').addClass('hide');
});

/*Panel Slidy Footer*/
$(function(){
$('.Panel-slidy').hover(function(){
        $(this).find('.panel-footer').slideDown(250);
    },function(){
        $(this).find('.panel-footer').slideUp(250); //.fadeOut(205)
    });
})
/*
* navbar fullpage dropdown
* by iwebued.com
*/
$(function () {
  var sideslider = $('[data-toggle-style=fulldropdown]');
  sideslider.click(function(event) {
    $('body').toggleClass('fulldropdown');
  });
  $(window).resize(function() {
    $('body').removeClass('fulldropdown');
		$('header .navbar-collapse').removeClass('in');
  })
});

/*
* Link to top page
* By http://bootsnipp.com/snippets/featured/link-to-top-page
*/
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#backto-top').fadeIn();
    } else {
      $('#backto-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#backto-top').click(function () {
    $('#backto-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });     
  //$('#backto-top').hover.tooltip('show');
});


/*
* responsive-breadcrumbs响应式面包屑导航
* By http://bootsnipp.com/snippets/featured/responsive-breadcrumbs
*/
$(function () {
  $(window).resize(function() {
    ellipses1 = $(".responsive-breadcrumb :nth-child(2)")
    if ($(".responsive-breadcrumb a:hidden").length >0) {ellipses1.show()} else {ellipses1.hide()}
        
    //ellipses2 = $("#bc2 :nth-child(2)")
    //if ($("#bc2 a:hidden").length >0) {ellipses2.show()} else {ellipses2.hide()}       
  })    
});

/*
* Dot Navigation with tooltips
* By http://bootsnipp.com/snippets/featured/dot-navigation-with-tooltips
*/
$(function() {
  $('.awesome-tooltip').tooltip({
    placement: 'left'
  });

  $(window).bind('scroll',function(e) {
    dotnavigation();
  });

  function dotnavigation() {
    var numSections = $('section').length;
    $('.dot-nav li a').removeClass('active').parent('li').removeClass('active');
    $('section').each(function(i, item) {
      var ele = $(item),
      nextTop;

      //console.log(ele.next().html());
      if (typeof ele.next().offset() != "undefined") {
        nextTop = ele.next().offset().top;
      } else {
        nextTop = $(document).height();
      }

      if (ele.offset() !== null) {
        thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numSections);
      } else {
        thisTop = 0;
      }

      var docTop = $(document).scrollTop();

      if (docTop >= thisTop && (docTop < nextTop)) {
        $('.dot-nav li').eq(i).addClass('active');
      }
    });
  }

  /* get clicks working */
  $('.dot-nav li').click(function() {

    var id = $(this).find('a').attr("href"),
    posi,
    ele,
    padding = 0;

    ele = $(id);
    posi = ($(ele).offset() || 0).top - padding;

    $('html, body').animate({
      scrollTop: posi
    },
    'slow');

    return false;
  });

  /* end dot nav */
});

/**
 *
 * pageToggle
 * 
 */
+(function(window, $) {
    'use strict';
  
  var togglePageSection = function($section, toggle) {
        var valType = typeof $section;
        if(valType === 'object') {
            if(typeof toggle === 'undefined') {
                toggle = $section.hasClass('collapsed');
            }
            if(!toggle) {
                $section.find(".chapter-body").children('section').addClass('collapsed');
            } else {
                $section.find(".chapter-body").children('section').removeClass('collapsed');
            }

            $section.toggleClass('collapsed', !toggle);
            var $setions = $(".chapter-body").children('section');
            var sectionsCount = $setions.length,
                collapsedSectionCount = $setions.filter('.collapsed').length;
            if(collapsedSectionCount === 0) {
                $("#page").removeClass('page-collapsed');
            } else if(collapsedSectionCount === sectionsCount) {
                $("#page").addClass('page-collapsed');
            }
        } else {
            toggle = valType === 'boolean' ? $section : $("#page").hasClass('page-collapsed');
            $("#page").toggleClass('page-collapsed', !toggle);
            $(".chapter").toggleClass('collapsed', !toggle);
            if(!toggle) {
                $(".chapter-body").children('section').addClass('collapsed');
            } else {
                $(".chapter-body").children('section').removeClass('collapsed');
            }
        }
    };
  
  $(".chapter-body").on('click', 'section > header > h4', function() {
        togglePageSection($(this).closest('section'));
    }).on('mouseenter', 'section > header > h4', function() {
        $(this).closest('section').addClass('hover');
    }).on('mouseleave', 'section > header > h4', function() {
    $(this).closest('section').removeClass('hover');
    });

    $(".chapter").on('click', '.container .chapterTogger', function() {
        togglePageSection($(this).closest('.chapter'));
    });

    $("#allTogger").on("click",function(){
　　　　togglePageSection();
　　});
  
  
}(window, jQuery)); 

/*banner*/
$('.banner').each(function() {
    var e = $(this);
    var pointer = e.attr("data-pointer");
    var interval = e.attr("data-interval");
    var style = e.attr("data-style");
    var items = e.attr("data-item");
    var items_xs = e.attr("data-xs");
    var items_sm = e.attr("data-sm");
    var items_md = e.attr("data-md");
    var items_lg = e.attr("data-lg");
    var items_xl = e.attr("data-xl");
    var num = e.find(".carousel .item").length;
    var win = $(window).width();
    var i = 1;

    if (interval == null) {
        interval = 5
    };
    if (items == null || items < 1) {
        items = 1
    };
    if (items_xs != null && win > 768) {
        items = items_xs
    };
    if (items_sm != null && win > 992) {
        items = items_sm
    };
    if (items_md != null && win > 1200) {
        items = items_md
    };
    if (items_lg != null && win > 1430) {
        items = items_lg
    };
    if (items_xl != null && win > 1680) {
        items = items_xl
    };

    //alert(e.width());
    //alert(e.innerWidth());
    //alert(e.outerWidth());
    //alert(e.outerWidth(true));
    //alert(parseInt(e.width()));
    //alert(e.parent().parent().outerWidth());
    //alert(e.parent().css('display'));
    var itemWidth = (e.parent().css('display') == "none") ? Math.ceil(e.parent().parent().outerWidth() / items) : Math.ceil(e.outerWidth() / items);
    //var itemWidth=(e.parent().outerWidth() > e.outerWidth())? Math.ceil(e.parent().outerWidth()/items) : Math.ceil(e.outerWidth()/items);
    //var itemWidth=Math.ceil(e.outerWidth()/items);
    var page = Math.ceil(num / items);
    e.find(".carousel .item").css("width", itemWidth + "px");
    e.find(".carousel").css("width", itemWidth * num + "px");

    var carousel = function() {
        i++;
        if (i > page) {
            i = 1;
        }
        $showbanner(e, i, items, num);
    };
    var play = setInterval(carousel, interval * 600);

    e.mouseover(function() {
        clearInterval(play);
    });
    e.mouseout(function() {
        play = setInterval(carousel, interval * 600);
    });

    if (pointer != 0 && page > 1) {
        var point = '<ul class="pointer"><li value="1" class="active"></li>';
        for (var j = 1; j < page; j++) {
            point = point + ' <li value="' + (j + 1) + '"></li>';
        };
        point = point + '</ul>';
        var pager = $(point);
        if (style != null) {
            pager.addClass(style);
        };
        e.append(pager);
        pager.css("left", e.outerWidth() * 0.5 - pager.outerWidth() * 0.5 + "px");
        pager.find("li").click(function() {
            $showbanner(e, $(this).val(), items, num);
        });
        var lefter = $('<div class="pager-prev fa fa-angle-left"></div>');
        var righter = $('<div class="pager-next fa fa-angle-right"></div>');
        if (style != null) {
            lefter.addClass(style);
            righter.addClass(style);
        };
        e.append(lefter);
        e.append(righter);

        lefter.click(function() {
            i--;
            if (i < 1) {
                i = page;
            }
            $showbanner(e, i, items, num);
        });
        righter.click(function() {
            i++;
            if (i > page) {
                i = 1;
            }
            $showbanner(e, i, items, num);
        });
    };
});
$showbanner = function(e, i, items, num) {
    var after = 0,
    leftx = 0;
    leftx = -Math.ceil(e.outerWidth() / items) * (items) * (i - 1);
    if (i * items > num) {
        after = i * items - num;
        leftx = -Math.ceil(e.outerWidth() / items) * (num - items);
    };
    e.find(".carousel").stop(true, true).animate({
        "left": leftx + "px"
    },
    800);
    e.find(".pointer li").removeClass("active");
    e.find(".pointer li").eq(i - 1).addClass("active");
};

/*
* counterUp config
* 
*/
$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});

/*
* Swiper config
* By http://www.swiper.com.cn/
*/
$(function() {
  var banner = new Swiper('.banner', {
    effect: 'fade',
    nextButton: '.banner-button-next',
    prevButton: '.banner-button-prev',
    pagination: '.banner-pagination',
    paginationClickable: true,
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazyLoading: true,
    spaceBetween: 0,
    speed: 600,
    autoplay: 3000,
    loop:true
  });
  var branches = new Swiper('.branches', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });
  var slide5 = new Swiper('.slide5', {
    nextButton: '.slide5-button-next',
    prevButton: '.slide5-button-prev',
    pagination: '.slide5-pagination',
    paginationClickable: true,
    preloadImages: false,
    lazyLoading: true,
    slidesPerView: 5,
    slidesPerGroup:5,
    spaceBetween: 15,
    breakpoints: {
      1430: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      959: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  }); 
  var slide6 = new Swiper('.slide6', {
    nextButton: '.slide6-button-next',
    prevButton: '.slide6-button-prev',
    pagination: '.slide6-pagination',
    paginationClickable: true,
    preloadImages: false,
    lazyLoading: true,
    slidesPerView: 6,
    spaceBetween: 15,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });  
});

$(function () {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var slide51 = new Swiper('.slide51', {
      nextButton: '.slide51-button-next',
      prevButton: '.slide51-button-prev',
      pagination: '.slide51-pagination',
      paginationClickable: true,
      preloadImages: false,
      lazyLoading: true,
      slidesPerView: 5,
      slidesPerGroup:5,
      spaceBetween: 15,
      breakpoints: {
        1430: {
          slidesPerView: 4,
          spaceBetween: 15
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        959: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      }
    });
    if($(".tab-pane.active .swiper-pagination").children(".swiper-pagination .swiper-pagination-bullet").length >= 2) {
      $(".tab-pane.active .swiper-pagination").show();
    }
    //e.target // newly activated tab
    //e.relatedTarget // previous active tab
  });

  $(".swiper-pagination").each(function(){
    if($(this).children(".swiper-pagination-bullet").length < 2) {
      $(this).hide();
    }
  });

  //pin
  $(".top-pinned").pin({minWidth: 940});
  $(".pinned").pin({minWidth: 940,padding: {top: 88}});

  //social-share
  $('.social-share').share();
});