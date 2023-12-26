<?
    include_once('./hangten_header.php');

    $userId         = "kkoma1221";          
    $userPw         = "dltkfkd88^^";          
    $userName       = "이사랑";        
    $userEmail      = "hahihuheho25@naver.com";       
    $userHp         = "01025451371";                 
    $userAddress    = "경기 고양시 덕양구 행당로11번길 16  (토당동, 삼윤아파트) 102동 908호";                 
    $userGender     = "여자";      
    $userBirth      = "1988-12-21";       
    $userService    = "필수 동의함1,필수 동의함2,동의함4";

    $SQL = "UPDATE hangten_table
            SET userPw='$userPw', userEmail='$userEmail', userHp='$userHp', userAddress='$userAddress', userGender='$userGender', userBirth='$userBirth', userService='$userService'
            WHERE userId='$userId' AND userName='$userName'";

    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo '{"아이디":"'.$userId.'"}';
    }
    else {
        echo 0;
    }
?>