<?php 
	header("Content-Type: text/html;charset=utf-8");
	session_start();
	session_unset('group_id');
	if(empty($_SESSION['group_id'])){
		$return = array(
			'msg' => '成功退出！三秒后将自动跳转到首页！',
			'status' => 0
		);
		echo json_encode($return);
	}
	else{
		$return = array(
			'msg' => '退出失败！请检查网络后进行重试！',
			'status' => -1
		);
		echo json_encode($return);
	}
	
?>