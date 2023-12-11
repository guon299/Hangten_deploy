<?
    include_once('./hangten_header.php');

    $userId = $_POST['userId'];
    $userName = $_POST['userName'];
    $userEmail = $_POST['userEmail'];

    $SQL = "SELECT userId, userName, userEmail, userPw FROM hangten_table
            WHERE userId='$userId' AND userName='$userName' AND userEmail='$userEmail'";
    
    $res = mysqli_query($conn, $SQL);

    if(mysqli_num_rows($res)>0){
        $result = mysqli_fetch_array($res);
        echo '{"아이디":"'.$result['userId'].'", "이름":"'.$result['userName'].'", "이메일":"'.$result['userEmail'].'", "비밀번호":"'.$result['userPw'].'"}';
    }
    else{
        echo '';
    }

?>