/*
* @Author: Administrator
* @Date:   2017-09-09 15:27:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-20 12:20:52
*/
var _tool = require('tool/baseTool.js');
var _interview = {
	applySubmit : function(data,resolve, reject){
        _tool.request({
            url     : _tool.getServerUrl('server/apply.php'),
            data 	: data,
            method  : 'post',
            success : resolve,
            error   : reject
        });
    },
    checkSession : function(resolve, reject){
        _tool.request({
            url     : _tool.getServerUrl('server/examiners-session-check.php'),
            method  : 'post',
            success : resolve,
            error   : reject
        });
    },
    checkInterview : function(data,resolve, reject) {
        _tool.request({
            url     : _tool.getServerUrl('server/examiners-going-check.php'),
            data    : data,
            method  : 'post',
            success : resolve,
            error   : reject
        });
    },
    interviewGoing : function(data,resolve, reject) {
        _tool.request({
            url     : _tool.getServerUrl('server/examiners-begin.php'),
            data    : {
                status : data
            },
            method  : 'post',
            success : resolve,
            error   : reject
        });
    },
    loginOut : function (resolve,reject) {
        _tool.request({
            url     : _tool.getServerUrl('server/logout.php'),
            method  : 'post',
            success : resolve,
            error   : reject
        });
    },
    loginIn : function (passphrase,resolve,reject) {
        _tool.request({
            url     : _tool.getServerUrl('server/group_login.php'),
            method  : 'post',
            data    : {
                passphrase : passphrase
            },
            success : resolve,
            error   : reject
        });
    },
    saveInfo : function (data,resolve,reject) {
        _tool.request({
            url     : _tool.getServerUrl('server/save_info.php'),
            method  : 'post',
            data    : data,
            success : resolve,
            error   : reject
        });
    },
    signIn : function (data,resolve,reject) {
        _tool.request({
            url     : _tool.getServerUrl('server/dis_interview.php'),
            method  : 'post',
            data    : data,
            success : resolve,
            error   : reject
        });
    },
    flow : function (resolve,reject) {
        _tool.request({
            url     : _tool.getServerUrl('server/flow.php'),
            method  : 'post',
            success : resolve,
            error   : reject
        });
    },
    results : function (resolve,reject) {
        _tool.request({
            url     : _tool.getServerUrl('server/results.php'),
            method  : 'post',
            success : resolve,
            error   : reject
        });
    }
};
module.exports = _interview;