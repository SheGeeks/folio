<?php 
$errors = '';
$myemail = 'shegeeks@shegeeks.net';//<-----Put Your email address here.
if(empty($_POST['name'])  || 
   empty($_POST['email']) || 
   empty($_POST['business']) ||
   empty($_POST['services']) ||
   empty($_POST['cta']) ||
   empty($_POST['manager']) ||
   empty($_POST['budget']) )
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name']; 
$email_address = $_POST['email']; 
$business = $_POST['business']; 
$services = $_POST['services']; 
$cta = $_POST['cta']; 
$manager = $_POST['manager']; 
$budget = $_POST['budget']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Web Dev InquiryFrom: $name";
	$email_body = "$name is interested in getting your help building their next website! ".
	" Here are the details:\n Name: $name \n Email: $email_address \n Business \n $business \n Services \n $services \n CTA \n $cta \n Manager \n $manager \n Budget \n $budget"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	// header('Location: contact-form-thank-you.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>