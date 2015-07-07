/**
 * Developed by Ivan Semernyakov on 28.06.15
 * Developer URL: http://beatum-site.ru/
 */

$(document).ready(function () {

    // NiceScroll
    $("html").niceScroll({
        cursorcolor: "#CCC",
        cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
        cursorborder: "0", // css definition for cursor border
        cursorborderradius: "0", // border radius in pixel for curso
        scrollspeed: 60, // scrolling speed
        mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
        background: "", // change css for rail background
    });
    // Enable smart menu
    $(function() {
      $('#main-menu').smartmenus({
        subIndicatorsText: '<i class="fa fa-angle-right"></i>',
      });
    });
    // Scroll UP animation
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp',      // Element ID
            scrollDistance: 480,         // Distance from top/bottom before showing element (px)
            scrollFrom: 'top',           // 'top' or 'bottom'
            scrollSpeed: 300,            // Speed back to top (ms)
            easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
            animation: 'fade',           // Fade, slide, none
            animationSpeed: 200,         // Animation speed (ms)
            scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
            scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
            scrollText: 'Вверх', // Text for element, can contain HTML
            scrollTitle: false,          // Set a custom <a> title if required.
            scrollImg: false,            // Set true to use image
            activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 2147483647           // Z-Index for the overlay
        });
    });

    // Slider
    $(".rslides").responsiveSlides({
      auto: true,             // Boolean: Animate automatically, true or false
      speed: 500,            // Integer: Speed of the transition, in milliseconds
      timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
      pager: false,           // Boolean: Show pager, true or false
      nav: false,             // Boolean: Show navigation, true or false
      random: false,          // Boolean: Randomize the order of the slides, true or false
      pause: true,           // Boolean: Pause on hover, true or false
      pauseControls: true,    // Boolean: Pause when hovering controls, true or false
      prevText: "Назад",   // String: Text for the "previous" button
      nextText: "Впереёд",       // String: Text for the "next" button
      maxwidth: "877",           // Integer: Max-width of the slideshow, in pixels
      navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
      manualControls: "",     // Selector: Declare custom pager navigation
      namespace: "rslides",   // String: Change the default namespace used
      before: function(){},   // Function: Before callback
      after: function(){}     // Function: After callback
    });
});

