<?php
$name = $_POST['fname'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$mensaje = $_POST['comments'];

$header = 'From: ' . $email . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Mensaje enviado por : " . $name . "\r\n";
$message .= "Su email es: " . $email . "\r\n";
$message .= "Asunto: " . $subject . "\r\n";
$message .= "Mensaje: " . $_POST['message'] . "\r\n";
$message .= "Enviado el: " . date('d/m/Y' , time());

$para = 'luchitoxpatrick13@gmail.com';
$asunto = 'Asunto del mensaje'

mail($para, $asunto, utf8_decode($message, $header));

header("Location:index.html")
?>