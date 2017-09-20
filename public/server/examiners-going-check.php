<?php
//获取面生同学信息表
include_once "function.php";
$conn = mysqliConnect();
/*session_start();
if(!isset($_SESSION['group_id']))
{
	$return = array(
		'msg' => '您还未登录，请登录后再进行操作，三秒后将自动跳转！',
		'status' => -1
	);
	echo json_encode($return);
	exit();
}*/
header("Content-Type: text/html;charset=utf-8");
//设置数据库字符集
$query = "set names utf8";
$result = $conn->query($query);
$status = @$_POST['status'];
/*$group_id = $_SESSION['group_id']; */

//$status = 2;
$group_id = 5;

$query = "select stu_id from interview_flow where group_id=$group_id";
$result = $conn->query($query);
$id = $result->fetch_assoc();
//防止页面刷新导致正在面试的同学无法进行面试的情况
if($id['stu_id'] != 0){
	$query = "select status from interview_info where stu_id=".$id['stu_id']."";
	$result = $conn->query($query);
	$status_1 = $result->fetch_assoc();
	if($status_1['status'] == ($status+1)){
		$return = array(
			'msg' => '可以面试!',
			'status' => 0
		);
		echo json_encode($return);
		$conn->close();
	}
	else{
		$return = array(
			'msg' => '您有一项面试正在进行中，不能开始另外一场！',
			'status' => -1
		);
		echo json_encode($return);
		$conn->close();
	}
}
else{
	$result = $conn->query($query);
	$query = "select*from interview_info where status=$status limit 1";//获取等待面试的第一位学生
	$result = $conn->query($query);
	if($result->num_rows){
		$return = array(
			'msg' => '可以面试!',
			'status' => 0
		);
		echo json_encode($return);
		$conn->close();
	}
	else{
		$return = array(
			'msg' => '暂无等待面试学生！',
			'status' => -1
		);
		echo json_encode($return);
		$conn->close();
	}
}
?>