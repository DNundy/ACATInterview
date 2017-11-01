/*
* @Author: Administrator
* @Date:   2017-09-09 20:18:47
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-10-28 08:29:15
*/
require('./index.css');
var _tool 		= require('tool/baseTool.js');
var _interview 	= require('service/interview-service.js');

var page = {
	init : function () {
		this.onLoad();
	},
	onLoad : function () {
		var _this = this;
		_interview.checkSession(function(res){
			_this.bindEvent();
		},function(msg) {
			window.location.href="loginIn.html";
		});
	},
	bindEvent : function () {
		var _this = this;
		$("#obtn1").click(function(){
			window.location.href="onGoing.html?status=0";
		}); 
		$("#obtn2").click(function(res){
			window.location.href="onGoing.html?status=2";
		}); 
		$("#obtn3").click(function(res){
			window.location.href="onGoing.html?status=4";
		});
		$("#quit").click(function(){
			_interview.loginOut(function (res) {
				_tool.tips(res);
				setTimeout(function () {
					window.location.href="index.html";
				}, 3000);
			},function (err) {
				_tool.tips(err);
			})
		});
		$("#account").click(function(){
			window.location.href="results.html";
		});
	}
};

$(function () {
	page.init();
})