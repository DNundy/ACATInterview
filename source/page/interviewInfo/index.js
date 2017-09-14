/*
* @Author: Administrator
* @Date:   2017-09-13 19:54:29
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-14 09:18:51
*/
require('./index.css');
var _tool 		= require('tool/baseTool.js');
var _interview 	= require('service/interview-service.js');
var htmlTemp 	= require('./index.string');

var page={
	init : function() {
		this.onload();
	},
	onload : function () {
		var _this = this;
		var _timeInterval = null;
		setInterval(function () {
			_interview.flow(function (res){
				var HtmlDist = _tool.renderHtml(htmlTemp,res);
				$('.contact-form').html(HtmlDist);
			},function (err) {
				_tool.tips(err);
			});
		}, 2000);
	},
	scroll : function (parents) {
		var $parent = $(parents);
		var $first = $parent.find('li:first');
		var height = $first.height();
			$first.animate({
			marginTop: -height + 'px'
		}, 500, function() {
			$first.css('marginTop', 0).appendTo($parent);
		});
	}
};
$(function () {
	page.init();
});