<?php

try{
	
		$dbh = new PDO('mysql:host=localhost;dbname=dev_iteach; charset=utf8', "root", "");
		
 }
 catch(PDOException $e){
 	print "Erreur ! : ".$e -> getMessage(). "<br/>";
	die();
}



// 2 ieme part 

$name_file = $_FILES['img']['name'];
$tmp_name = $_FILES['img']['tmp_name'];
$local_image = "../IMG/imgB/";

move_uploaded_file($tmp_name,$local_image.$name_file);



$stmt=$dbh -> prepare("Call  Insert_Article(?,?,?,?,?) ");




$stmt-> bindParam(1,$Pathimg);
$stmt-> bindParam(2,$Titre);
$stmt-> bindParam(3,$Texte);
$stmt-> bindParam(4,$Date);
$stmt-> bindParam(5,$Code);



$Pathimg= $local_image.$name_file; 



$Titre=$_POST['Titre'];
$Texte=$_POST['message'];
$Date=$_POST['DAte'] ;
$Code= $Titre.$Date;

var_dump($_FILES);

$stmt ->execute();


?>