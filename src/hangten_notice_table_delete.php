<?
    include_once('./hangten_header.php');

    $idx = $_POST['idx'];

    $SQL = "DELETE FROM hangten_notice_table WHERE idx='$idx'";

    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo 1;
    }
    else {
        echo 0;
    }
?>