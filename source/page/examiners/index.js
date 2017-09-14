/*
* @Author: Administrator
* @Date:   2017-09-09 20:18:47
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-10 13:50:36
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
			_interview.checkInterview({
				status : 0
			},function (res) {
				window.location.href="onGoing.html?status=0";
			},function (msg) {
				_tool.tips(msg);
			})
		}); 
		$("#obtn2").click(function(res){
			_interview.checkInterview({
				status : 2
			},function (res) {
				window.location.href="onGoing.html?status=2";
			},function (msg) {
				_tool.tips(msg);
			})
		}); 
		$("#obtn3").click(function(res){
			_interview.checkInterview({
				status : 4
			},function (res) {
				window.location.href="onGoing.html?status=4";
			},function (msg) {
				_tool.tips(msg);
			})
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