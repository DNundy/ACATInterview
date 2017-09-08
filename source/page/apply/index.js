/*
* @Author: Nudny
* @Date:   2017-09-07 23:07:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-08 13:21:09
*/
require('./index.css');

var page={
	init : function() {
		this.ready();
		this.bindEvent();
	},
	ready : function() {
		$('[data-toggle="tooltip"]').tooltip();
	},
	bindEvent : function () {
		$('.nav-toggle').click(function() {
			$(this).toggleClass('active');
			$('.header-nav').toggleClass('open');
			event.preventDefault();
		});
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
	}
};

$(document).ready(function(){
	page.init();
});