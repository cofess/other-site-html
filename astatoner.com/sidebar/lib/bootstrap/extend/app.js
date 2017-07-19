//tooltip
(function($){
	$("[data-toggle='tooltip']").tooltip();
})(jQuery);
//Button components
jQuery(document).on('click', '[data-toggle^="class"]',
function(e) {
	e && e.preventDefault();
	var $this = $(e.target),
	$class,
	$target,
	$tmp,
	$classes,
	$targets; ! $this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
	$class = $this.data()['toggle'];
	$target = $this.data('target') || $this.attr('href');
	$class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
	$target && ($targets = $target.split(','));
	$classes && $classes.length && $.each($targets,
	function(index, value) {
		if ($classes[index].indexOf('*') !== -1) {
			var patt = new RegExp('\\s' + $classes[index].replace(/\*/g, '[A-Za-z0-9-_]+').split(' ').join('\\s|\\s') + '\\s', 'g');
			$($this).each(function(i, it) {
				var cn = ' ' + it.className + ' ';
				while (patt.test(cn)) {
					cn = cn.replace(patt, ' ');
				}
				it.className = $.trim(cn);
			});
		} ($targets[index] != '#') && $($targets[index]).toggleClass($classes[index]) || $this.toggleClass($classes[index]);
	});
	$this.toggleClass('active');
});

// panel toggle
jQuery(document).on('click', '.panel-toggle',
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
jQuery(document).on('click', '.panel-remove',
function(e) {
	e && e.preventDefault();
	var $this = $(e.target),
	$class = 'collapse',
	$target;
	if (!$this.is('a')) $this = $this.closest('a');
	$target = $this.closest('.panel').addClass('hide');
});


/*
* navbar fullpage dropdown
* by iwebued.com
*/
(function($) {
    var sideslider = $('[data-toggle-style=fulldropdown]');
    sideslider.click(function(event) {
        $('body').toggleClass('fulldropdown');
    });
    $(window).resize(function() {
        $('body').removeClass('fulldropdown');
		$('header .navbar-collapse').removeClass('in');
    })
})(jQuery);

/*
* Timeline 2.1 with images and responsive
* By http://bootsnipp.com/snippets/featured/timeline-21-with-images-and-responsive
*/
(function($) {
	var my_posts = $("[rel=tooltip]");

	var size = $(window).width();
	for(i=0;i<my_posts.length;i++){
		the_post = $(my_posts[i]);

		if(the_post.hasClass('invert') && size >=767 ){
			the_post.tooltip({ placement: 'left'});
			the_post.css("cursor","pointer");
		}else{
			the_post.tooltip({ placement: 'rigth'});
			the_post.css("cursor","pointer");
		}
	}
})(jQuery);


/*
* Link to top page
* By http://bootsnipp.com/snippets/featured/link-to-top-page
*/
(function($) {
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
})(jQuery);


/*
* responsive-breadcrumbs响应式面包屑导航
* By http://bootsnipp.com/snippets/featured/responsive-breadcrumbs
*/
(function($) {
    $(window).resize(function() {

        ellipses1 = $(".responsive-breadcrumb :nth-child(2)")
        if ($(".responsive-breadcrumb a:hidden").length >0) {ellipses1.show()} else {ellipses1.hide()}
        
        //ellipses2 = $("#bc2 :nth-child(2)")
        //if ($("#bc2 a:hidden").length >0) {ellipses2.show()} else {ellipses2.hide()}
        
    })
    
})(jQuery);

/*
* Dot Navigation with tooltips
* By http://bootsnipp.com/snippets/featured/dot-navigation-with-tooltips
*/
(function($){
    $('.awesome-tooltip').tooltip({
        placement: 'left'
    });

    $(window).bind('scroll',
    function(e) {
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

            /*var docTop = $(document).scrollTop();

            if (docTop >= thisTop && (docTop < nextTop)) {
                $('.dot-nav li').eq(i).addClass('active');
            }*/
        });
    }

    /* get clicks working */
    $('.dot-nav li').click(function() {

        var id = $(this).find('a').attr("href"),
        posi,
        ele,
        padding = 130;

        ele = $(id);
        posi = ($(ele).offset() || 0).top - padding;

        $('html, body').animate({
            scrollTop: posi
        },
        'slow');

        return false;
    });

    /* end dot nav */
})(jQuery);

/*banner*/
	jQuery('.banner').each(function(){
		var e=$(this);
		var pointer=e.attr("data-pointer");
		var interval=e.attr("data-interval");
		var style=e.attr("data-style");
		var items=e.attr("data-item");
		var items_xs=e.attr("data-xs");
		var items_sm=e.attr("data-sm");
		var items_md=e.attr("data-md");
		var items_lg=e.attr("data-lg");
		var items_xl=e.attr("data-xl");
		var num=e.find(".carousel .item").length;
		var win=$(window).width();
		var i=1;

		if(interval==null){interval=5};
		if(items==null || items<1){items=1};
		if(items_xs!=null && win>768){items=items_xs};
		if(items_sm!=null && win>992){items=items_sm};
		if(items_md!=null && win>1200){items=items_md};
		if(items_lg!=null && win>1430){items=items_lg};
		if(items_xl!=null && win>1680){items=items_xl};
        
		//alert(e.width());
        //alert(e.innerWidth());
        //alert(e.outerWidth());
        //alert(e.outerWidth(true));
		//alert(parseInt(e.width()));
		//alert(e.parent().parent().outerWidth());
		//alert(e.parent().css('display'));
		var itemWidth=(e.parent().css('display')=="none")? Math.ceil(e.parent().parent().outerWidth()/items) : Math.ceil(e.outerWidth()/items);
		//var itemWidth=(e.parent().outerWidth() > e.outerWidth())? Math.ceil(e.parent().outerWidth()/items) : Math.ceil(e.outerWidth()/items);
		//var itemWidth=Math.ceil(e.outerWidth()/items);
		var page=Math.ceil(num/items);
		e.find(".carousel .item").css("width",itemWidth+ "px");
		e.find(".carousel").css("width",itemWidth*num + "px");
		
		var carousel=function(){
			i++;
			if(i>page){i=1;}
			$showbanner(e,i,items,num);
		};
		var play=setInterval(carousel,interval*600);
		
		e.mouseover(function(){clearInterval(play);});
		e.mouseout(function(){play=setInterval(carousel,interval*600);});
		
		if(pointer!=0 && page>1){
			var point='<ul class="pointer"><li value="1" class="active"></li>';
			for (var j=1;j<page;j++){
				point=point+' <li value="'+(j+1)+'"></li>';
			};
			point=point+'</ul>';
			var pager=$(point);
			if(style!=null){pager.addClass(style);};
			e.append(pager);
			pager.css("left",e.outerWidth()*0.5 - pager.outerWidth()*0.5+"px");
			pager.find("li").click(function(){
				$showbanner(e,$(this).val(),items,num);
			});
			var lefter=$('<div class="pager-prev fa fa-angle-left"></div>');
			var righter=$('<div class="pager-next fa fa-angle-right"></div>');
			if(style!=null){lefter.addClass(style);righter.addClass(style);};
			e.append(lefter);
			e.append(righter);
			
			lefter.click(function(){
				i--;
				if(i<1){i=page;}
				$showbanner(e,i,items,num);
			});
			righter.click(function(){
				i++;
				if(i>page){i=1;}
				$showbanner(e,i,items,num);
			});
		};
	});	
	$showbanner=function(e,i,items,num){
		var after=0,leftx=0;
		leftx = - Math.ceil(e.outerWidth()/items)*(items)*(i-1);
		if(i*items > num){after=i*items-num;leftx= - Math.ceil(e.outerWidth()/items)*(num-items);};
		e.find(".carousel").stop(true, true).animate({"left":leftx+"px"},800);
		e.find(".pointer li").removeClass("active");
		e.find(".pointer li").eq(i-1).addClass("active");
	};