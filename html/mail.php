<?php
// if the url field is empty
if(isset($_POST['url']) && $_POST['url'] == ''){
     // then send the form to your email
          mail( 'linh-quan@outlook.com', 'Contact Form', print_r($_POST,true) );
}
// otherwise, let the spammer think that they got their message through

$to = "linh-quan@outlook.com";
$subject = "Website Form";
$headers = 'From: '.$email."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();

$name = $_POST['name']; // required
$email = $_POST['email']; // required
$response = $_POST['response']; // required

$txt .= "Name: ".clean_string($name)."\n";
$txt .= "Email: ".clean_string($email)."\n";
$txt .= "Message: ".clean_string($response)."\n";


mail($to,$subject,$txt,$headers);

?>
