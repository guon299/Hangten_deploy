<?

    include_once('./hangten_header.php');

    $userName = $_POST['userName'];
    $userEmail = $_POST['userEmail'];

    $sql = "SELECT userName, userEmail, userId, userGaib FROM hangten_table
            WHERE userName='$userName' AND userEmail='$userEmail'";
    
    $res = mysqli_query($conn, $sql);

    if(mysqli_num_rows($res) > 0){
        $result = mysqli_fetch_array($res);
        echo '{"이름":"'.$result['userName'].'", "이메일":"'.$result['userEmail'].'", "아이디":"'.$result['userId'].'", "가입일":"'.$result['userGaib'].'"}';
    }
    else {
        echo '';
    }

?>