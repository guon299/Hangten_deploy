<?
    include_once('./hangten_header.php');

    $userName = $_POST['userName'];
    $userHp = $_POST['userHp'];

    $SQL = "SELECT userName, userHp, userId, userGaib FROM hangten_table
            WHERE userName='$userName' AND userHp='$userHp'";

    $res = mysqli_query($conn, $SQL);

    if(mysqli_num_rows($res)>0){
        $record = mysqli_fetch_array($res);
        echo '{"이름":"'.$record['userName'].'", "휴대폰":"'.$record['userHp'].'", "아이디":"'.$record['userId'].'", "가입일":"'.$record['userGaib'].'"}';
    }
    else {
        echo '';
    }
?>