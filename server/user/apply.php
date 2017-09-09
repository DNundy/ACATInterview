<?php
header("Content-Type: text/html;charset=utf-8");
include_once "function.php";
$conn = mysqliConnect();
$query = "set names utf8";
$result = $conn->query($query);

$stu_name = $_POST['stu_name'];
$stu_num = $_POST['stu_num'];
$tel = $_POST['tel'];
$major = $_POST['major'];
$email = $_POST['email'];
$self_introd = $_POST['self_introd'];
$sex = $_POST['sex'];
$choice = $_POST['choice'];

$query = "insert into interview_info(stu_name,stu_num,tel,major,email,self_introd,sex,choice,status) values('$stu_name','$stu_num','$tel','$major','$email','$self_introd',$sex,'$choice',-1)";
$result = $conn->query($query);

if($result){
	$return = array(
		'status' => 0,
		'msg' => '恭喜您,报名成功!'
	);
}
else{
	$return = array(
		'status' => -1,
		'msg' => '该学号已报名，请勿重复报名!',
	);
}

echo json_encode($return);
$conn->close();
?>