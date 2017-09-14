/*
* @Author: Nudny
* @Date:   2017-09-07 23:07:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-14 19:44:26
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
		_interview.results(function (res) {
			var HtmlDist = _tool.renderHtml(htmlTemp,res);
			$('.contact-form').html(HtmlDist);
		},function(err) {
			_tool.tips(err);
		});
	}
};

$(document).ready(function(){
	page.init();
});