<?
    include_once('./hangten_header.php');

    $userId         = "answotlr12";          
    $userPw         = "answotlr123";          
    $userName       = "깁갑수";        
    $userEmail      = "rkqtnrqktn@naver.com";       
    $userHp         = "010-1233-4545";                 
    $userAddress    = "서울시 서초구 신촌로 5";                 
    $userGender     = "선택안함";      
    $userBirth      = "2000-02-22";       
    $userService    = "이용약관동의 필수 내용 3가지 입력";

    $sql = "INSERT INTO hangten_table (userId,userPw,userName,userEmail,userHp,userAddress,userGender,userBirth,userService) 
            VALUES ('$userId','$userPw','$userName','$userEmail','$userHp','$userAddress','$userGender','$userBirth','$userService')";
    $result = mysqli_query($conn,$sql);
    if($result===true){
        echo "테이블 저장 성공!";
    }
    else{
        echo "테이블 저장 실패!";
    }
?>