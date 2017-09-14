<?php
	session_start();
	if(!isset($_SESSION['group_id']))
	{
		$return = array(
			'msg' => '您还未登录，请登录后再进行操作，三秒后将自动跳转！',
			'status' => -1
		);
		echo json_encode($return);
	}
	else{
		$return = array(
			'msg' => 'success！',
			'status' => 0
		);
		echo json_encode($return);
	}
?>