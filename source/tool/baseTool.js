/*
* @Author: Administrator
* @Date:   2017-09-09 13:13:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-13 21:19:14
*/
var conf = {
	serverHost : '/System/'
};
var Hogan = require('hogan.js');
var _tool = {
	request : function(param) {
		var _this = this;
		$.ajax({
			type 		: param.method 		|| 		'post',
			url 		: param.url 		|| 		'',
			dataType 	: param.type 		||		'json',
			data 		: param.data 		||		'',
			success		: function (res) {
				//请求成功，返回数据与提示信息
				if( res.status == 0 ){
					typeof param.success === 'function' && param.success(res.msg);
				}
				//请求错误，返回提示信息
				else if( res.status == -1 ){
					typeof param.error === 'function' && param.error(res.msg);
				}
			},
			error 		: function(err) {
				typeof param.error === 'function' && param.error(err.msg);
			}
		})
	},
	tips  : function (msg) {
		$('#modal').html(msg).modal();
	},
	getServerUrl : function (path) {
		return conf.serverHost + path;
	},
	//渲染String模板
	renderHtml : function (htmlTemplate,data) {
		var temp 	= Hogan.compile(htmlTemplate);
		var result 	= temp.render(data);
		return result;
	},
	getUrlParam : function (name) {
		var reg 	= new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		var result	= window.location.search.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : null ;
	}
};
module.exports = _tool;