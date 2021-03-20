<?php

#Receive user input
$org = $_POST['organization'];
$fullname = $_POST['fullname'];
$designation = $_post['designation'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$country = $_POST['country'];
$pincode = $_POST['pincode'];
$phonenumber = $_POST['phone'];
$fax = $_POST['fax'];
$mobile = $_POST['mobile'];
$email_address = $_POST['email'];
$website = $_POST['website'];
$txtmessage = $_POST['message'];


#Send email
$headers = "From: $email_address";
$message = "Organizatio: $org <br>Customer Name: $fullname <br> designation: $designation<br> address: $address <br> city: $city <br> state: $state <br> country: $country <br> pincode: $pincode <br> fax: $fax <br> Email Address: $email_address<br> Phone number: $phonenumber <br> Message: $txtmessage <br> mobile: $mobile <br> website: $website";
$sent = mail('info@newdigipack.com', 'Enquiry Page', $message, $headers);

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