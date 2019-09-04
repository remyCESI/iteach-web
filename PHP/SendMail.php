<?php


require '../vendor/autoload.php'; // If you're using Composer (recommended)
// Comment out the above line if not using Composer
// require("<PATH TO>/sendgrid-php.php");
// If not using Composer, uncomment the above line and
// download sendgrid-php.zip from the latest release here,
// replacing <PATH TO> with the path to the sendgrid-php.php file,
// which is included in the download:
// https://github.com/sendgrid/sendgrid-php/releases

$email = new \SendGrid\Mail\Mail(); 
$email->setFrom("remy.vancamp@viacesi.fr");
$email->setSubject("bonjour");
$email->addTo("remy.vancamp@viacesi.fr");
$email->addContent("text/plain", "bojoureiiehrih");
$sendgrid = new \SendGrid('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');


// $emailAjax = $_POST['email'];
// $sujet = $_POST['objet'];
// $message = $_POST['message'];


// if($sendgrid->send($email)){
// 	echo "OK";
// }
// else{
// 	echo"nope";
// }

try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: '. $e->getMessage() ."\n";
}

?>