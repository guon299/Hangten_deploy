<?
    include_once('./hangten_header.php');

    $userId = "kimmarin0406";
    $userName = "김하린";
    $userHp = "01078638376";

    $SQL = "SELECT userId, userName, userHp, userGaib, userPw FROM hangten_table
            WHERE userId='$userId' AND userName='$userName' AND userHp='$userHp'";

    $res = mysqli_query($conn, $SQL);

    if(mysqli_num_rows($res)>0){
        $result = mysqli_fetch_array($res);
        echo '{"아이디":"'.$result['userId'].'", "이름":"'.$result['userName'].'", "휴대폰":"'.$result['userHp'].'", "가입일":"'.$result['userGaib'].'", "비밀번호":"'.$result['userPw'].'"}';
    }
    else{
        echo '';
    }


?>