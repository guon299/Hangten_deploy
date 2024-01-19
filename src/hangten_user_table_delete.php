<?
    include_once('./hangten_header.php');

    $userId = $_POST['userId'];
    $userName = $_POST['userName'];

    $SQL = "DELETE FROM hangten_table WHERE userId='$userId' AND userName='$userName'";

    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo 1;
    }
    else {
        echo 0;
    }

?>