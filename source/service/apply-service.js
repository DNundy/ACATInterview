/*
* @Author: Administrator
* @Date:   2017-09-09 15:27:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-09 15:59:48
*/
var _tool = require('tool/baseTool.js');
var _apply = {
	applySubmit : function(data,resolve, reject){
        _tool.request({
            url     : _tool.getServerUrl('/server/user/apply.php'),
            data 	: data,
            method  : 'post',
            success : resolve,
            error   : reject
        });
    }
};
module.exports = _apply;