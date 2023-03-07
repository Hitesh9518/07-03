<?php
require('config.php');

$sql = "select * from teachar_registration";
$result = mysqli_query($con, $sql);

while ($row = mysqli_fetch_assoc($result)) {

    $id = $row['id'];
    $fname = $row['fname'];
    $mname = $row['mname'];
    $lname = $row['lname'];
    $dob = $row['dob'];
    $gender = $row['gender'];
    $hobbies = $row['hobbies'];
    $address = $row['address'];
    $graduation = $row['graduation'];
    $mobile = $row['mobile'];
    $email = $row['email'];
    $state = $row['state'];
    $city = $row['city'];
    $pincode = $row['pincode'];

    echo "<tr>
    <td>$id</td>
    <td>$fname</td>
    <td>$mname</td>
    <td>$lname</td>
    <td>$dob</td>
    <td>$gender</td>
    <td>$hobbies</td>
    <td>$address</td>
    <td>$graduation</td>
    <td>$mobile</td>
    <td>$email</td>
    <td>$state</td>
    <td>$city</td>
    <td>$pincode</td>
    <td><a href='update.php?id=$row[id]'><input type='button' value='Edit'></a></td>
    </tr>";
}
