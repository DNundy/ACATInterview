<?php
//获取面试结果
include_once "function.php";
$conn = mysqliConnect();
header("Content-Type: text/html;charset=utf-8");
$query = "set names utf8";
$result = $conn->query($query);

$noPassNum = -2;
$noSignNum = -1;
$passNum = 6;

$javaNum=0;
$webNum=0;
$phpNum=0;
$cNum=0;

$aJAVA=array();
$aweb=array();
$aphp=array();
$aC=array();

/*未通过学生*/
$query = "select stu_id,stu_name,f_grade,tel,s_grade,t_grade from interview_info where status=$noPassNum";
$result = $conn->query($query);
if($result->num_rows){
	for($i = 0; $i < $result->num_rows; $i++){
		$noPass[] = $result->fetch_assoc();
	}
	$noPassTotal = true;
	$noPassTotalNum = $result->num_rows;
}
else{
	$noPassTotal = false;
	$noPassTotalNum = null;
	$noPass[]=array();
}

/*未签到学生*/
$query = "select stu_name from interview_info where status=$noSignNum";
$result = $conn->query($query);
if($result->num_rows){
	for($i = 0; $i < $result->num_rows; $i++){
		$noSign[] = $result->fetch_assoc();
	}
	$noSignTotal = true;
	$noSignTotalNum = $result->num_rows;
}
else{
	$noSignTotal = false;
	$noSignTotalNum = null;
	$noSign[]=array();
}

/*通过学生*/
$query = "select stu_id,stu_name,choice,f_grade,tel,s_grade,t_grade from interview_info where status=$passNum";
$result = $conn->query($query);
if($result->num_rows){
	for($i = 0; $i < $result->num_rows; $i++){
		$temp = $result->fetch_assoc();
		if($temp['choice'] == 'JAVA方向'){
			array_push($aJAVA, $temp);
			$javaNum+=1;
		}
		elseif($temp['choice']== 'C++方向'){
			array_push($aC, $temp);
			$cNum+=1;
		}
		elseif($temp['choice']== 'PHP方向'){
			array_push($aphp, $temp);
			$phpNum+=1;
		}
		elseif($temp['choice']== 'WEB前端'){
			array_push($aweb, $temp);
			$webNum+=1;
		}
	}
	$passTotal = true;
	$passTotalNum = $result->num_rows;
}
else{
	$passTotal = false;
	$passTotalNum = null;
	$pass[]=array();
}

$return = array(
	'status' => 0,
	'msg' => array(
		'noSign' => $noSign,
		'noPass' => $noPass,
		'noSignTotal' => $noSignTotal,
		'noSignTotalNum' => $noSignTotalNum,

		'aJAVA' => $aJAVA,
		'aWEB' => $aweb,
		'aPHP' => $aphp,
		'aC' => $aC,

		'javaNum'=> $javaNum,
		'webNum'=> $webNum,
		'phpNum'=> $phpNum,
		'cNum'=> $cNum,

		'passTotal' => $passTotal,
		'passTotalNum' => $passTotalNum,
		'noPassTotal' => $noPassTotal,
		'noPassTotalNum' => $noPassTotalNum
	)
);
echo json_encode($return);
$conn->close();
?>