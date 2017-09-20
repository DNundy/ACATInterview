<?php
//x显示面试相关信息
include_once "function.php";
$conn = mysqliConnect();
header("Content-Type: text/html;charset=utf-8");
//设置数据库字符集
$query = "set names utf8";
$result = $conn->query($query);
//获取面试区信息
$query = "select group_name,stu_name,stu_num,status from interview_info,interviewer_status,interview_flow where interview_info.stu_id=interview_flow.stu_id and interviewer_status.group_id=interview_flow.group_id";

$result = $conn->query($query);

if($result->num_rows){
	$view_exit = true;
	for($i = 0; $i < $result->num_rows; $i++){
		$at_view[] = $result->fetch_assoc();
		$at_view[$i]['status'] = interviewStatus($at_view[$i]['status']);
		$at_view[$i]['id'] = $i+1;
	}
	if($result->num_rows > 10){
		$viewOmit = true;
		$viewOmitNum = $result->num_rows - 10;
	}
	else{
		$viewOmit = false;
		$viewOmitNum = null;
	}
}
else{
	$view_exit = false;
	$at_view = array();
	$viewOmit = false;
	$viewOmitNum = null;
}

//获取等待面试的学生姓名学号
$query = "select stu_num,stu_name,status from interview_info where status=0 or status=2 or status=4";
$result = $conn->query($query);
if($result->num_rows){
	$wait_exit = true;
	for($i = 0; $i < $result->num_rows; $i++){
		$wait_view[] = $result->fetch_assoc();
		$wait_view[$i]['status'] = interviewStatus($wait_view[$i]['status']);
		$wait_view[$i]['id'] = $i+1;
	}
	if($result->num_rows > 10){
		$waitOmit = true;
		$waitOmitNum = $result->num_rows - 10;
	}
	else{
		$waitOmit = false;
		$waitOmitNum = null;
	}
}
else{
	$wait_exit = false;
	$wait_view = array();
	$waitOmit = false;
	$waitOmitNum = null;
}

$return = array(
	'msg' => array(
		'wait_exit' => $wait_exit,
		'view_exit' => $view_exit,

		'onWait' => $wait_view,
		'onView' => $at_view,

		'waitOmit' => $waitOmit,
		'waitOmitNum' => $waitOmitNum,

		'viewOmit' => $viewOmit,
		'viewOmitNum' => $viewOmitNum
	),
	'status' => 0
);
echo json_encode($return);
$conn->close();
?>