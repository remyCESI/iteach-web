<?php

try{
	
		$dbh = new PDO('mysql:host=localhost;dbname=dev_iteach; charset=utf8', "root", "");
		
 }
 catch(PDOException $e){
 	print "Erreur ! : ".$e -> getMessage(). "<br/>";
	die();
}

$stmt=$dbh -> prepare("Select * from article");
$stmt->execute();
$result =$stmt->fetchAll();
echo json_encode($result);




?>