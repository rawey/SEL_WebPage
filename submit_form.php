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
    $mail->Subject = 'New Contact Form Submission - ' . date('Y-m-d H:i:s');

    $otherText = isset($_POST['other-text']) && !empty($_POST['other-text']) ? htmlspecialchars($_POST['other-text']) : 'N/A';

    $dropdownValue = htmlspecialchars($_POST['dropdown']);
    if ($dropdownValue === 'other') {
        $dropdownValue = 'Other';
    }

    $mail->Body = '
    <html>
    <body>
        <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
            <tr>
                <th colspan="2" style="background-color: #91a5c7;">Potential Customer</th>
            </tr>
            <tr>
                <td>Name</td>
                <td>' . htmlspecialchars($_POST['name']) . '</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>' . htmlspecialchars($_POST['email']) . '</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>' . htmlspecialchars($_POST['phone']) . '</td>
            </tr>
            <tr>
                <td>How Can We Help</td>
                <td>' . $dropdownValue . '</td>
            </tr>
            <tr>
                <td>Other</td>
                <td>' . $otherText . '</td>
            </tr>
        </table>
    </body>
    </html>';
    $mail->send();
    echo '<div style="color: green;">Message has been sent</div>';
} catch (Exception $e) {
    echo '<div style="color: red;">Message could not be sent. Mailer Error: ' . $mail->ErrorInfo . '</div>';
}
?>
