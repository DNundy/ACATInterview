/*
* @Author: Administrator
* @Date:   2017-09-09 13:13:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-09 16:20:59
*/
var conf = {
	serverHost : '/System/'
};

var _tool = {
	tips  : function (msg) {
		$('#modal').text(msg).modal();
	},
	request : function(param) {
		var _this = this;
		$.ajax({
			type 		: param.method 		|| 		'post',
			url 		: param.url 		|| 		'',
			dataType 	: param.type 		||		'json',
			data 		: param.data 		||		'',
			success		: function (res) {
				//请求成功，返回数据与提示信息
				if( res.status === 0 ){
					typeof param.success === 'function' && param.success(res.msg);
				}
				//请求错误，返回提示信息
				else if( res.status === -1 ){
					typeof param.error === 'function' && param.error(res.msg);
				}
			},
			error 		: function(err) {
				typeof param.error === 'function' && param.error(err.msg);
			}
		})
	},
	getServerUrl : function (path) {
		return conf.serverHost + path;
	}
};
module.exports = _tool;