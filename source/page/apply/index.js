/*
* @Author: Nudny
* @Date:   2017-09-07 23:07:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-09 16:30:47
*/
require('./index.css');
var _tool 	= require('tool/baseTool.js');
var _apply 	= require('service/apply-service.js');

var page={
	init : function() {
		this.ready();
		this.bindEvent();
	},
	ready : function() {
		$('[data-toggle="tooltip"]').tooltip();
	},
	bindEvent : function () {
		/*缓存this对象*/
		var _this = this;

		/*移动端列表图标*/
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

		/*提交申请信息*/
		$("#submitBtn").click(function(){
			/*获取数据*/
			var applyData = {
				status 		: true,
				stu_name  	: $('#stu_name').val(),
			    stu_num 	: $('#stu_num').val(),
			    tel 		: $('#tel').val(),
			    major 		: $('#major').val(),
			    email 		: $('#email').val(),
			    self_introd : $('#self_introd').val(),
			    sex 		: $('#sex input:radio:checked').val(),
			    choice 		: $('#choice').val()
			};

			/*验证数据*/
			var result= _this.dataFilter(applyData);

			/*执行请求或提示错误*/
			if(result.status === true){
				_apply.applySubmit(applyData,
				function (res) {
					_tool.tips(res);
				},
				function (err) {
					_tool.tips(err);
				});
			}
			else{
				_tool.tips(result.status);
			}
	    });
	},
	dataFilter : function (data) {
        if(!data.sex || !data.stu_name || !data.stu_num || !data.tel || !data.major || !data.email || !data.self_introd || !data.choice)
         {
            data.status = "信息不能为空!"
            return data;
         }
        if(!(/^0\d{7}$/.test(data.stu_num))){
            data.status = "学号输入错误，请重写!"
            return data;
        }
        if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(data.email))){
            data.status = "邮箱格式错误，请重写！"
            return data;
        }
        return data;
	}
};

$(document).ready(function(){
	page.init();
});