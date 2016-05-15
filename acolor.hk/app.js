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
});
