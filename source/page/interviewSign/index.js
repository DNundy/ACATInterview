/*
* @Author: Administrator
* @Date:   2017-09-10 12:58:11
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-13 19:53:17
*/
require('./index.css');
var _tool 		= require('tool/baseTool.js');
var _interview 	= require('service/interview-service.js');

var page={
	data : {
		stu_name 	: '',
		stu_num 	: ''
	},
	init : function() {
		this.bindEvent();
	},
	bindEvent : function () {
		var _this = this;
		$("#submitBtn").click(function(){
			if($('#stu_name').val() && $('#stu_num').val()){
				_this.data.stu_name = $('#stu_name').val();
				_this.data.stu_num = $('#stu_num').val();
				_interview.signIn(_this.data,function (res) {
					_tool.tips(res);
					setTimeout(function () {
						window.location.reload();
					}, 1600);
				},function (err) {
					_tool.tips(err);
				})
			}
			else{
				_tool.tips('请填写完整姓名和学号！');
			}
	    });
	}
};

$(document).ready(function(){
	page.init();
});