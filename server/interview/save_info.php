<?php
//将面试结果保存到数据库
include_once "function.php";
$conn = mysqliConnect();
session_start();//开启session
header("Content-Type: text/html;charset=utf-8");
//设置数据库字符集
$query = "set names utf8";
$result = $conn->query($query);
$group_id = $_SESSION['group_id'];//从当前session获取group_id
$stu_id = $_POST['stu_id'];//id
$status = $_POST['status'];//面试状态
$remarks = $_POST['remarks'];//评语
$grade = $_POST['grade'];//得分
if(empty($remarks)){
	$remarks = "无倾向性评价";
}
if(empty($grade)){
	$grade = 0;
}
$view_result = $_POST['view_result'];//面试结果(0 -> 面试通过  -1 -> 面试未通过)

$query = "select status from interview_info where stu_id=$stu_id";
$result = $conn->query($query);
$status_1 = $result->fetch_assoc();
//避免重复提交
if($status_1['status'] == ($status+2) || $status_1['status'] == -2){
	$return = array(
		'status' => -1,
		'msg' => '该面试已提交,勿重复提交！',
	);
	echo json_encode($return);
	$conn->close();
}
else{
	$query = "update interview_flow set stu_id=0 where group_id=$group_id";
	$result = $conn->query($query);
	if($status == 0){
		if($view_result == 0){
			$query = "update interview_info set f_remarks='$remarks',f_grade=$grade,status=status+1 where stu_id=$stu_id";
		}
		else{
			$query = "update interview_info set f_remarks='$remarks',f_grade=$grade,status=-2 where stu_id=$stu_id";
		}
		$result = $conn->query($query);
		if($result){
			$return = array(
				'status' => 0,
				'msg' => '辛苦，面试已完成!,三秒后自动返回考官页面！'
			);
			echo json_encode($return);
			$conn->close();
		}
		else{
			$return = array(
				'status' => -1,
				'msg' => '保存信息发生了错误，请确保您填写了正确的信息或者检查网络后稍后重试！',
			);
			echo json_encode($return);
			$conn->close();
		}
	}
	else if($status == 2){
		if($view_result == 0){
			$query = "update interview_info set s_remarks='$remarks',s_grade=$grade,status=status+1 where stu_id=$stu_id";
		}
		else{
			$query = "update interview_info set s_remarks='$remarks',s_grade=$grade,status=-2 where stu_id=$stu_id";
		}
		$result = $conn->query($query);
		if($result){
			$return = array(
				'status' => 0,
				'msg' => '辛苦，面试已完成!,三秒后自动返回考官页面！'
			);
			echo json_encode($return);
			$conn->close();
		}
		else{
			$return = array(
				'status' => -1,
				'msg' => '保存信息发生了错误，请确保您填写了正确的信息或者检查网络后稍后重试！',
			);
			echo json_encode($return);
			$conn->close();
		}
	}
	if($status == 4){
		if($view_result == 0){
			$query = "update interview_info set t_remarks='$remarks',t_grade=$grade,status=status+1 where stu_id=$stu_id";
		}
		else{
			$query = "update interview_info set t_remarks='$remarks',t_grade=$grade,status=-2 where stu_id=$stu_id";
		}
		$result = $conn->query($query);
		if($result){
			$return = array(
				'status' => 0,
				'msg' => '辛苦，面试已完成!,三秒后自动返回考官页面！'
			);
			echo json_encode($return);
			$conn->close();
		}
		else{
			$return = array(
				'status' => -1,
				'msg' => '保存信息发生了错误，请确保您填写了正确的信息或者检查网络后稍后重试！',
			);
			echo json_encode($return);
			$conn->close();
		}
	}
}
?>