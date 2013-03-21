<?php

/*
 * Validation rules:
 * 1. First name is required
 * 2. Last name is required
 * 3. Email address is required
 * 4. Comments is optional
 */

# assume that the form is valid by default
$errors = array();

# validating the first name
if(trim($_POST['first_name']) === ''){
    $errors[] = "The First Name field is required.";
}

# validating the last name
if(trim($_POST['last_name']) === ''){
    $errors[] = "The Last Name field is required.";
}

# validating the email address
if(trim($_POST['email_address']) === ''){
    $errors[] = "The Email Address field is required.";
}

# create an array to buffer the response
$response = array();

if(empty($errors)){
    $response['status']  = 'success';
    $response['content'] = 'The form is valid.';
}

else {
    $response['status']  = 'failure';
    $response['content'] = join($errors, "<br>");
}

# package our response array as json
$json = json_encode($response);
echo $json;
die();
