(function($) {
    jQuery(document).ready(function($) {
        $('.hassub').parent().click(function() {
            $('ul.wah-ul').addClass('subactivated');
			$('.wah-item').find('.sub').removeClass('opened');
			$('.wah-item').removeClass('active');
			$(this).find('.sub').addClass('opened');
            $(this).addClass('active');
        });

        //点击任何地方执行
        $(document).click(function(){
            $('ul.wah-ul').removeClass('subactivated');
            $('.wah-item').find('.sub').removeClass('opened');
            $('.wah-item').removeClass('active');
        });

        $("ul.wah-ul").click(function(event){
            event.stopPropagation();//阻止冒泡事件
        });

        $("ul.wah-ul").on('click','.menu-close',function(){
            $('ul.wah-ul').removeClass('subactivated');
            $('.wah-item').find('.sub').removeClass('opened');
            $('.wah-item').removeClass('active');
        });		
		   	
        $('.extend').on('click',
        function() {
            $(this).find('span').toggleClass('hideicon');
            $('.wah-ul').toggleClass('minimized');
            $('.wah-ul a').powerTip('destroy');
            $('.wah-ul.minimized a').powerTip({
                placement: 'w' // north-east tooltip position
            });
        });
        $('.wah-menu').imagesLoaded(function() {
            $(".sidebar-scroll").mCustomScrollbar({
                scrollInertia: 600,
                set_height: "85%",
                scrollButtons: {
                    enable: true
                },
                theme: "dark-thin"
            });
        });
        $('.wah-ul.minimized a').powerTip({
            placement: 'w' // north-east tooltip position
        });
		
		$(".wah-item").mouseover(function(){
		$(this).children(".mp_qrcode").show();
	});
	$(".wah-item").mouseleave(function(){
		$(this).children(".mp_qrcode").hide();
	});

    });
})(jQuery);