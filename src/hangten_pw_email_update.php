<?

    include_once('./hangten_header.php');

    $userId = $_POST['userId'];
    $userEmail = $_POST['userEmail'];
    $userPw = $_POST['userPw'];

    $SQL = "UPDATE hangten_table SET userPw='$userPw'
            WHERE userId='$userId' AND userEmail='$userEmail'";

    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo 1;
    }
    else {
        echo 0;
    }
?>