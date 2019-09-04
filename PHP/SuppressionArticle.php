<?php

try{
	
		$dbh = new PDO('mysql:host=localhost;dbname=dev_iteach;charset=utf8', "root", "");
		
 }
 catch(PDOException $e){
 	print "Erreur ! : ".$e -> getMessage(). "<br/>";
	die();
}




$stmt=$dbh -> prepare("Call  Supp_Article(?) ");
$stmt-> bindParam(1,$Code);
$Code= $_POST['CodeArticle'];
$stmt ->execute();


?>

