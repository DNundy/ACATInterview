/*
* @Author: Administrator
* @Date:   2017-09-07 23:07:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-08 14:00:18
*/
require('./index.css');
var page = {
    init : function () {
        this.ready();
    },
    ready : function () {
        this.waypoint();
        this.bindEvent();

        $('.flexslider').flexslider({
            animation: "slide"
        });

        $('.single_image').fancybox({
            padding: 4,
        });

        $('[data-toggle="tooltip"]').tooltip();
    },
    bindEvent : function () {
        /*Header BG Scroll*/
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });

        /* clicks the Icon */
        $('.nav-toggle').click(function() {
            $(this).toggleClass('active');
            $('.header-nav').toggleClass('open');
            event.preventDefault();
        });

        /* clicks a link */
        $('.header-nav li a').click(function() {
            $('.nav-toggle').toggleClass('active');
            $('.header-nav').toggleClass('open');

        });

        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 2000);
                    return false;
                }
            }
        });
    },
    waypoint : function () {
        $('.wp1').waypoint(function() {
            $('.wp1').addClass('animated fadeInUp');
        }, {
            offset: '75%'
        });
        $('.wp2').waypoint(function() {
            $('.wp2').addClass('animated fadeInUp');
        }, {
            offset: '75%'
        });
        $('.wp3').waypoint(function() {
            $('.wp3').addClass('animated fadeInRight');
        }, {
            offset: '75%'
        });
    }
};

$(document).ready(function(){
    page.init();
});