$(document).ready(function(o) {
    "use strict";
    o(".big-cta").hover(function() {
        o(".cta a").addClass("animated shake")
    }, function() {
        o(".cta a").removeClass("animated shake")
    }), o(".box").hover(function() {
        o(this).find(".icon").addClass("animated bounce"), o(this).find("p").addClass("animated bounce"), o(this).find("h4").addClass("animated bounce"), o(this).find(".box-bottom").addClass("animated pulse"), o(this).addClass("animated pulse")
    }, function() {
        o(this).find(".icon").removeClass("animated bounce"), o(this).find("p").removeClass("animated bounce"), o(this).find("h4").removeClass("animated bounce"), o(this).find(".box-bottom").removeClass("animated pulse"), o(this).removeClass("animated pulse")
    }), o(".accordion").on("show", function(e) {
        o(e.target).prev(".accordion-heading").find(".accordion-toggle").addClass("active"), o(e.target).prev(".accordion-heading").find(".accordion-toggle i").removeClass("icon-plus"), o(e.target).prev(".accordion-heading").find(".accordion-toggle i").addClass("icon-minus")
    }), o(".accordion").on("hide", function(e) {
        o(this).find(".accordion-toggle").not(o(e.target)).removeClass("active"), o(this).find(".accordion-toggle i").not(o(e.target)).removeClass("icon-minus"), o(this).find(".accordion-toggle i").not(o(e.target)).addClass("icon-plus")
    }), o(".social-network li a, .options_box .color a, .thumbnail img").tooltip(), o(".fancybox").fancybox({
        padding: 0,
        autoResize: !0,
        beforeShow: function() {
            this.title = o(this.element).attr("title"), this.title = "<h4>" + this.title + "</h4>"
        },
        helpers: {
            title: {
                type: "inside"
            }
        }
    }), o(window).scroll(function() {
        100 < o(this).scrollTop() ? o(".scrollup").fadeIn() : o(".scrollup").fadeOut()
    }), o(".scrollup").click(function() {
        return o("html, body").animate({
            scrollTop: 0
        }, 1e3), !1
    }), o(".p-slider").flexslider({
        controlNav: !1,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: ""
    }), o("#main-slider").flexslider({
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: ""
    })
});