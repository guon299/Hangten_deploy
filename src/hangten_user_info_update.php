<?
    include_once('./hangten_header.php');

    $userId         = $_POST['userId'];          
    $userPw         = $_POST['userPw'];          
    $userName       = $_POST['userName'];        
    $userEmail      = $_POST['userEmail'];
    $userHp         = $_POST['userHp'];                 
    $userAddress    = $_POST['userAddress'];                 
    $userGender     = $_POST['userGender'];      
    $userBirth      = $_POST['userBirth'];       
    $userService    = $_POST['userService'];

    $SQL = "UPDATE hangten_table
            SET userPw='$userPw', userEmail='$userEmail', userHp='$userHp', userAddress='$userAddress', userGender='$userGender', userBirth='$userBirth', userService='$userService'
            WHERE userId='$userId' AND userName='$userName'";

    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo '{"아이디:"'.$userId.'", "비밀번호":"'.$userPw.'", "이름:"'.$userName.'", "이메일":"'.$userEmail.'", "휴대폰:"'.$userHp.'", "주소":"'.$userAddress.'", "성별":"'.$userGender.'", "생일":"'.$userBirth.'", 이용약관동의:"'.$userService.'"}';
    }
    else {
        echo '';
    }
?>