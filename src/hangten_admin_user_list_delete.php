<?
    include_once('./hangten_header.php');

    $userId = $_POST['userId'];

    $SQL = "DELETE FROM hangten_table WHERE userId='$userId'";

    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo 1;
    }
    else {
        echo 0;
    }
?>