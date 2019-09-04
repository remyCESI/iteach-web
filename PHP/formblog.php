<?php

try{
	
		$dbh = new PDO('mysql:host=localhost;dbname=dev_Iteach;charset=utf8', "root", "");
		
 }
 catch(PDOException $e){
 	print "Erreur ! : ".$e -> getMessage(). "<br/>";
	die();
}

$name_file = $_FILES['ImageA']['name'];
$tmp_name = $_FILES['ImageA']['tmp_name'];
$local_image = "imgA/";

move_uploaded_file($tmp_name,$local_image.$name_file);



$stmt=$dbh -> prepare("Call  Insert_Article(?,?,?,?,?,?) ");




$stmt-> bindParam(1,$Pathimg);
$stmt-> bindParam(2,$Titre);
$stmt-> bindParam(3,$Texte);
$stmt-> bindParam(4,$Date);
$stmt-> bindParam(5,$Auteur);
$stmt-> bindParam(6,$Code);



$Pathimg= $local_image.$name_file; 
$Titre=$_POST['titre'];
$Texte=$_POST['textA'];
$Date=$_POST['Date'] ;
$Auteur=$_POST['NomA'];
$Code= $Auteur.$Date;


$stmt ->execute();


?>

