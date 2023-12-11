<?
    include_once('./hangten_header.php');

    $userId = "kkoma1221";
    $userPw = "dltkfkd88^^";

    $SQL = "SELECT * FROM hangten_table WHERE userId='$userId' AND userPw='$userPw'";

    $res = mysqli_query($conn, $SQL);

    if(mysqli_num_rows($res)>0){
        $record = mysqli_fetch_array($res);
        echo '{"아이디":"'.$record['userId'].'", "이름":"'.$record['userName'].'","이메일":"'.$record['userEmail'].'", "휴대폰":"'.$record['userHp'].'", "주소":"'.$record['userAddress'].'", "생일":"'.$record['userBirth'].'" }';
    }
    else{
        echo 0;
    }

?>