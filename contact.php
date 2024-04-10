<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    
    $to = 'priyanshuchandak23@gmail.com'; 
    $subject = 'Message from Reforestation Initiative Contact Form';
    $body = "Name: $name\nEmail: $email\n\n$message";

   
    if (mail($to, $subject, $body)) {
        echo '<h3><i>Message sent successfully.</i></h3>';
        echo "<button onclick=\"window.location.href='index.html'\">Go Back to Homepage</button>";
    } else {
        echo 'An error occurred. Please try again later.';
    }
    
}
?>