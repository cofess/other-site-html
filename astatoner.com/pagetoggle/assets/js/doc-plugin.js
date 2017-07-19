+(function(window, $) {
    'use strict';
	
	$('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });
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
	
	$(".chapter-body").on('click', 'section > header > h3', function() {
        togglePageSection($(this).closest('section'));
    }).on('mouseenter', 'section > header > h3', function() {
        $(this).closest('section').addClass('hover');
    }).on('mouseleave', 'section > header > h3', function() {
		$(this).closest('section').removeClass('hover');
    });

    $(".chapter").on('click', '.container .chapterTogger', function() {
        togglePageSection($(this).closest('.chapter'));
    });

    $("#allTogger").on("click",function(){
　　　　togglePageSection();
　　});
	
	
}(window, jQuery));	