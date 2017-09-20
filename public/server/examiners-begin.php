<?php
//获取面生同学信息表
include_once "function.php";
$conn = mysqliConnect();
session_start();
header("Content-Type: text/html;charset=utf-8");
//设置数据库字符集
$query = "set names utf8";
$result = $conn->query($query);
$status = @$_POST['status'];
$group_id = $_SESSION['group_id']; 

$query = "select stu_id from interview_flow where group_id=$group_id";
$result = $conn->query($query);
$id = $result->fetch_assoc();
//防止页面刷新导致正在面试的同学无法进行面试的情况
if($id['stu_id'] != 0){
	$query = "select status from interview_info where stu_id=".$id['stu_id']."";
	$result = $conn->query($query);
	$status_1 = $result->fetch_assoc();
	if($status_1['status'] == ($status+1)){
		$change = 1;
		$query = "select*from interview_info where stu_id=".$id['stu_id']."";
		$result = $conn->query($query);
		for($i = 0; $i < $result->num_rows; $i++){
			$at_view[] = $result->fetch_assoc();
			$at_view[$i]['status'] = interviewStatus($at_view[$i]['status']);
		}
		$conn->close();
		$return = array(
			'msg' => $at_view[0],
			'status' => 0
		);
		echo json_encode($return);
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
	$query = "lock tables interview_info write";//加写锁
	$result = $conn->query($query);
	$query = "select*from interview_info where status=$status limit 1";//获取等待面试的第一位学生
	$result = $conn->query($query);
	if($result->num_rows){
		$change = 1;
		for($i = 0; $i < $result->num_rows; $i++){
			$at_view[] = $result->fetch_assoc();
			$at_view[$i]['status'] = interviewStatus($at_view[$i]['status'] + 1);
		}
		$query = "unlock tables";//清除写锁
		$result = $conn->query($query);
		$query = "update interview_info set status=status+1 where stu_id='".$at_view['0']['stu_id']."'";//更新学生面试状态
		$result = $conn->query($query);
		$query = "update interview_flow set stu_id='".$at_view['0']['stu_id']."' where group_id=$group_id";//更新面试流水表
		$result = $conn->query($query);
		echo json_encode($at_view);
		$conn->close();
	}
	else{
		$change = 0;
		$query = "unlock tables";
		$result = $conn->query($query);
		$conn->close();
		$return = array(
			'msg' => '暂无等待面试同学！三秒后自动跳转首页',
			'status' => -1
		);
		echo json_encode($return);
	}
}
?>