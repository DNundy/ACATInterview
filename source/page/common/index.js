/*
* @Author: Administrator
* @Date:   2017-09-08 11:31:25
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-09 19:36:50
*/
require('./index.css');
var page={
	init : function() {
		this.bindEvent();
	},
	bindEvent : function () {
		/*缓存this对象*/
		var _this = this;

		/*移动端列表图标,点击事件*/
		$('.nav-toggle').click(function() {
			$(this).toggleClass('active');
			$('.header-nav').toggleClass('open');
			event.preventDefault();
		});
		$('.header-nav li a').click(function() {
			$('.nav-toggle').toggleClass('active');
			$('.header-nav').toggleClass('open');

		});

		/*回到顶部*/
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