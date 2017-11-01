<?php
//签到
include_once "function.php";
$conn = mysqliConnect();
header("Content-Type: text/html;charset=utf-8");
//设置数据库字符集
$query = "set names utf8";
$result = $conn->query($query);
$stu_name = @$_POST['stu_name'];
$stu_num = @$_POST['stu_num'];

$query="select status from interview_info where stu_num='$stu_num' and stu_name='$stu_name'";
$result=$conn->query($query);
//判断是否报名
if(!$result->num_rows){
	$return = array(
		'status' => -1,
	    'msg' => '您还未报名，请先前往报名处报名，或者请检查姓名学号是否输入有误',
	);
}
else{
	//判断是否签到，status=-1时为未签到
	$status = $result->fetch_assoc();//获取状态信息
	if($status['status'] == -1){
		$query="update interview_info set status=0 where stu_num=$stu_num";//interview_info表中0为等待第一次面试标志
		$result=$conn->query($query);
		$return = array(
			'status' => 0,
		    'msg' => '恭喜您，签到成功！请耐心等候',
			);
	}
	else{
		$return = array(
			'status' => -1,
		    'msg' => '您已签到，请勿重复签到',
			);
	}
}
echo json_encode($return);
$conn->close();
?>