/*
* @Author: Administrator
* @Date:   2017-09-09 15:27:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-13 21:00:55
*/
var _tool = require('tool/baseTool.js');
var _interview = {
	applySubmit : function(data,resolve, reject){
        _tool.request({
            url     : _tool.getServerUrl('server/interview/apply.php'),
            data 	: data,
            method  : 'post',
            success : resolve,
            error   : reject
        });
    },
    checkSession : function(resolve, reject){
        _tool.request({
            url     : _tool.getServerUrl('server/interview/examiners-session-check.php'),
            method  : 'post',
            success : resolve,
            error   : reject
        });
    },
    checkInterview : function(data,resolve, reject) {
        _tool.request({
            url     : _tool.getServerUrl('server/interview/examiners-going-check.php'),
            data    : data,
            method  : 'post',
            success : resolve,
            error   : reject
        });
    },
    interviewGoing : function(data,resolve, reject) {
        _tool.request({
            url     : _tool.getServerUrl('server/interview/examiners-begin.php'),
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
            url     : _tool.getServerUrl('server/interview/logout.php'),
            method  : 'post',
            success : resolve,
            error   : reject
        });
    },
    loginIn : function (passphrase,resolve,reject) {
        _tool.request({
            url     : _tool.getServerUrl('server/interview/group_login.php'),
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
            url     : _tool.getServerUrl('server/interview/save_info.php'),
            method  : 'post',
            data    : data,
            success : resolve,
            error   : reject
        });
    },
    signIn : function (data,resolve,reject) {
        _tool.request({
            url     : _tool.getServerUrl('server/interview/dis_interview.php'),
            method  : 'post',
            data    : data,
            success : resolve,
            error   : reject
        });
    },
    flow : function (resolve,reject) {
        _tool.request({
            url     : _tool.getServerUrl('server/interview/flow.php'),
            method  : 'post',
            success : resolve,
            error   : reject
        });
    }
};
module.exports = _interview;