/*
* @Author: Administrator
* @Date:   2017-09-10 11:37:46
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-13 20:20:56
*/
require('./index.css');
var _tool 		= require('tool/baseTool.js');
var _interview 	= require('service/interview-service.js');
var htmlTemp 	= require('./index.string');

var page={
	data : {
		status 		: _tool.getUrlParam('status'),
		stu_id 	 	: '',
		grade 		: '',
		remarks 	: '',
		view_result : ''
	},
	init : function() {
		this.onload();
	},
	onload : function () {
		var _this = this;
		_interview.interviewGoing(_this.data.status,function (res){
			var HtmlDist = _tool.renderHtml(htmlTemp,res);
			_this.data.stu_id = res.stu_id;
			$('.contact-form').html(HtmlDist);
			_this.bindEvent();
		},function (err) {
			_tool.tips(err);
			setTimeout(function () {
				window.location.href="examiners.html";
			}, 3000);
		});
	},
	bindEvent : function () {
		var _this = this;
		$('#submitBtn').click(function () {
			if( _this.data.status == 0 ){
				_this.data.grade 		= $('.oneScore').val();
				_this.data.remarks 		= $('.oneAppraise').val();
			}
			if( _this.data.status == 2 ){
				_this.data.grade 		= $('.twoScore').val();
				_this.data.remarks 		= $('.twoAppraise').val();
			}
			if( _this.data.status == 4 ){
				_this.data.grade 		= $('.threeScore').val();
				_this.data.remarks 		= $('.threeAppraise').val();
			}
			_this.data.view_result 	= $('#lastChoose input[name="resultbtn"]:checked').val();
			if(_this.dataFilter(_this.data)){
				_interview.saveInfo(_this.data,function (res) {
					_tool.tips(res);
					setTimeout(function () {
						window.location.href="examiners.html";
					}, 3000);
				},function (err) {
					_tool.tips(err);
				});
			}
			else{
				_tool.tips('请正确填写所有评价内容后再试！');
			}
		});
	},
	dataFilter : function () {
		if(this.data.grade == ''){
			return false;
		}
		if(this.data.remarks == ''){
			return false;
		}
		if(this.data.view_result == undefined){
			return false;
		}
		return true;
	}
};
$(function () {
	page.init();
});