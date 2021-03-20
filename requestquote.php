<?php

#Receive user input
$email_address = $_POST['email'];
$fullname = $_POST['fullname'];
$phonenumber = $_POST['phone'];
$txtmessage = $_POST['message'];


#Send email
$headers = "From: $email_address";
$message = "Customer Name: $fullname <br> Email Address: $email_address<br> Phone number: $phonenumber <br> Message: $txtmessage";
$sent = mail('info@newdigipack.com', 'Request Quote', $message, $headers);

#Thank user or notify them of a problem
if ($sent) {

?><html>
<head>
<title>Thank You</title>
</head>
<body>
<h1>Thank You</h1>
<p>We will contact you soon.</p>
</body>
</html>
<?php

} else {

?><html>
<head>
<title>Something went wrong</title>
</head>
<body>
<h1>Something went wrong</h1>
<p>We could not send your fullname. Please try again.</p>
</body>
</html>
<?php
}
?>