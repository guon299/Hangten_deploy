<?
    include_once('./hangten_header.php');

    $userId = $_POST['userId'];
    $userHp = $_POST['userHp'];
    $userPw = $_POST['userPw'];

    $SQL = "UPDATE hangten_table SET userPw='$userPw'
            WHERE userId='$userId' AND userHp='$userHp'";
    
    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo 1;
    }
    else {
        echo 0;
    }

?>