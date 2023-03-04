<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

if(isset($_POST['submit'])){
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Subject: $subject<br>";
    echo "Message: $message<br>";

    // Form submission
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email preference
    $to = "howtoap23@gmail.com";
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

    // Email message
    $email_body = "<h2>New message from Contact Us form</h2>";
    $email_body .= "<p><strong>Name:</strong> $name</p>";
    $email_body .= "<p><strong>Email:</strong> $email</p>";
    $email_body .= "<p><strong>Subject:</strong> $subject</p>";
    $email_body .= "<p><strong>Message:</strong></p><p>$message</p>";

    // Send email
    mail($to, $subject, $email_body, $headers);

    // Redirect to thank you page
    header('Location: thank-you.html');
    exit;
}
?>
