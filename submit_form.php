<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = isset($_POST['other-text']) ? $_POST['other-text'] : $_POST['dropdown'];

    // Email settings
    $to = "selsolarfl@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
    $headers = "From: $email";

    // Sending email
    if (mail($to, $subject, $body, $headers)) {
        // Database connection
        $servername = "localhost"; // or your Hostinger database server
        $username = "u542894061_rawey08";
        $password = "Solar#1!";
        $dbname = "u542894061_sel_contacts";

        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO sel_contacts (name, email, phone, message) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $email, $phone, $message);

        // Execute and check
        if ($stmt->execute()) {
            // Redirect to thank you page
            header("Location: thank_you.html");
            exit();
        } else {
            echo "Error inserting data: " . $conn->error;
        }

        $stmt->close();
        $conn->close();
    } else {
        echo "Email sending failed.";
    }
}
?>

