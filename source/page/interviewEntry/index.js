/*
* @Author: Administrator
* @Date:   2017-09-09 16:49:00
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-20 09:38:19
*/
require('./index.css');

var page = {
	init : function () {
		this.bindEvent();
	},
	bindEvent : function () {
		var _this = this;
		$("#obtn0").click(function(){
			window.location.href="apply.html";
		});
		$("#obtn3").click(function(){
			window.location.href="examiners.html";
		});
	}
};

$(function() {
	page.init();
})