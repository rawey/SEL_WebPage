<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 2; // Enable verbose debug output
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'rawey.lugo@selsolarfl.com';
    $mail->Password = 'Getsuga1!3310';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    //Recipients
    $mail->setFrom('rawey.lugo@selsolarfl.com', 'SEL Florida');
    $mail->addAddress('selsolarfl@gmail.com');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Test Email';
    $mail->Body    = 'This is a test email to verify PHPMailer configuration.';

    $mail->send();
    echo '<div style="color: green;">Test email has been sent</div>';
} catch (Exception $e) {
    echo '<div style="color: red;">Test email could not be sent. Mailer Error: ' . $mail->ErrorInfo . '</div>';
}
?>
