<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "country_DB";

 
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    $sql = "SELECT id, region, value FROM country";
    $result= mysqli_query($conn, $sql);
   

    while ($row = mysqli_fetch_array($result)){
        $data[] = array('id' => $row['id'], 'region' => $row['region'], 'value' => $row["value"]);
       
    }
    $postData = array(json_encode($data));
    print_r($postData);

    ?>