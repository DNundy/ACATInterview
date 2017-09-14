/*
* @Author: Administrator
* @Date:   2017-09-10 12:58:11
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-10 13:36:06
*/
require('./index.css');
var _tool 		= require('tool/baseTool.js');
var _interview 	= require('service/interview-service.js');

var page={
	init : function() {
		this.bindEvent();
	},
	bindEvent : function () {
		var _this = this;
		$("#submitBtn").click(function(){
			var passphrase = $('#passphrase').val();
			_interview.loginIn(passphrase,
			function (res) {
				window.location.href="examiners.html";
			},
			function (err) {
				_tool.tips(err);
			});
	    });
	}
};

$(document).ready(function(){
	page.init();
});