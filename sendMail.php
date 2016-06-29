<?php 
if(isset($_POST['submit'])){
    $to = "pasiak5@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Wiadomość z portfolio";
    $subject2 = "Kopia wiadomości wysłanej do " . $to;
    $message = $name . " napisał:" . "\n\n" . $_POST['message'];
    $message2 = "Kopia Twojej wiadomości wysłana do  " .$to . ":\n\n" . $_POST['message'];

    $headers = "Od:" . $from;
    $headers2 = "Od:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2);
    header("Location: index.html");
    echo "Wiadomość została wysłana pomyślnie";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>