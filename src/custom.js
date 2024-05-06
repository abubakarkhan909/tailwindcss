jQuery(".navbarmenu").on('click', function() {
    jQuery(".navbarmenu").toggleClass("change");
    jQuery("header .logo").toggleClass("sided");
    jQuery(".main_container").toggleClass("blurred");
    jQuery("header .rightbtn").toggleClass("active");
    jQuery('.mobile-overlay').toggleClass('active');
    jQuery("header nav").removeClass("hidden");
    jQuery('.mobile-overlay').removeClass('hidden');
    jQuery('.mobile-overlay').toggleClass('active');
    jQuery("body").toggleClass("overflow-hidden");
});
jQuery('.mobile-overlay').on('click', function () {
    jQuery('.mobile-overlay').removeClass('active');
    jQuery('.mobile-overlay').addClass('hidden');
    jQuery('.navbar nav').addClass('hidden');
    jQuery("header nav").removeClass("active");
    jQuery(".navbarmenu").removeClass("change");
    jQuery("header .rightbtn").removeClass("active");
    jQuery("header .logo").removeClass("sided");
    jQuery(".main_container").removeClass("blurred");
    jQuery("body").removeClass("overflow-hidden");
});
 $(document).ready(function() {
    $(document).on('click', function(event)         {
        if (!$(event.target).closest('.dropdown-menu').length) {
            $(".dropdown .dropdown-toggle").removeClass("show").siblings(".dropdown-menu").addClass("hidden");
        }
    });
    $(".dropdown .dropdown-toggle").on('click',function(e) {
        e.stopPropagation();
        $(this).addClass("show");
        $(this).siblings(".dropdown-menu").removeClass("hidden");
    });
});