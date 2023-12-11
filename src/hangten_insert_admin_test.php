<?
    include_once('./hangten_header.php');

    $adminId         = "admin0070";          
    $adminPw         = "qpwoei102938";          
    $adminName       = "브랜디드 라이프스타일 코리아 주식회사";        
    $adminEmail      = "admin0070@naver.com";       
    $adminHp         = "01052365851";                 
    $adminAddress    = "경기 용인시 수지구 디지털벨리로 3 (죽전동) 123";              
    $adminGender     = "남자";      
    
    $sql = "INSERT INTO hangten_admin_table (adminId,adminPw,adminName,adminEmail,adminHp,adminAddress,adminGender) 
            VALUES ('$adminId','$adminPw','$adminName','$adminEmail','$adminHp','$adminAddress','$adminGender')";
    $result = mysqli_query($conn,$sql);


    if($result===true){
        echo 1;
    }
    else{
        echo 0;
    }
?>