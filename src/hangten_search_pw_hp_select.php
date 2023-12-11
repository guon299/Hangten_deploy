<?
    include_once('./hangten_header.php');

    $userId = $_POST['userId'];
    $userName = $_POST['userName'];
    $userHp = $_POST['userHp'];

    $SQL = "SELECT userId, userName, userHp, userPw FROM hangten_table
            WHERE userId='$userId' AND userName='$userName' AND userHp='$userHp'";

    $res = mysqli_query($conn, $SQL);

    if(mysqli_num_rows($res)>0){
        $result = mysqli_fetch_array($res);
        echo '{"아이디":"'.$result['userId'].'", "이름":"'.$result['userName'].'", "휴대폰":"'.$result['userHp'].'", "비밀번호":"'.$result['userPw'].'"}';
    }
    else{
        echo '';
    }


?>