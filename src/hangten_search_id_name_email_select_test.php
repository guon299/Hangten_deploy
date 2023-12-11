<?

    include_once('./hangten_header.php');

    $userName = "도레미";
    $userEmail = "doremifa@naver.com";

    $sql = "SELECT userName, userEmail, userId FROM hangten_table
            WHERE userName='$userName' AND userEmail='$userEmail'";
    
    $res = mysqli_query($conn, $sql);

    if(mysqli_num_rows($res) > 0){
        $record = mysqli_fetch_array($res);
        echo '{"이름":"'.$record['userName'].'", "이메일":"'.$record['userEmail'].'", "아이디":"'.$record['userId'].'"}';
    }
    else {
        echo '데이터 없음';
    }

?>