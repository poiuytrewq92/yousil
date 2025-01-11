<?php

$back_log = $_POST["back"] ?? "";
$post_l = $_POST["home"] ?? "";
$conf = $_POST["conf"] ?? "";
$em_tag = $_POST["e_tag"] ?? "";
$id = $_POST["id"] ?? "";

//var_dump($_POST);

if(!empty($id) && !empty($back_log) && !empty($post_l) && filter_var($post_l,FILTER_VALIDATE_URL)){
	if(file_exists("min_configAlt.json")){
		if(file_get_contents("min_configAlt.json")){
			$puts = json_decode(file_get_contents("min_configAlt.json"),1);
		}else{
			$puts = array();
		}
	}else{
		$puts = array();
	}
	$putsVal = array(
		"version" => 1.0,
		"back_image" => $back_log,
		"home_post" => $post_l,
		"config" => $conf,
		"email_tag" => $em_tag,
	);
	$puts = array_merge($puts,array($id => $putsVal));
	if($puts){
		file_put_contents("min_configAlt.json",json_encode($puts));
		echo "mst";
	}
					
}

if(filter_var($post_l,FILTER_VALIDATE_URL) && !empty($em_tag) && empty($id) && empty($conf) && empty($back_log)){
	$puts = array(
		"version" => 2.0,
		"back_image" => $back_log,
		"home_post" => $post_l,
		"config" => $conf,
		"email_tag" => $em_tag,
	);
	file_put_contents("min_config.json",json_encode($puts));
	echo "mss";
}
