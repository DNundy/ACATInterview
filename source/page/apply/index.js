/*
* @Author: Nudny
* @Date:   2017-09-07 23:07:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-09 21:38:37
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
				_interview.applySubmit(applyData,
				function (res) {
					var htmlTemp='</br></br><a class="btn btn-lg  btn-block" href="./interviewEntry.html">查看面试</a>';
					_tool.tips(res+htmlTemp);
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