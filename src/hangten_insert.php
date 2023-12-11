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
    
    $sql = "INSERT INTO hangten_table (userId,userPw,userName,userEmail,userHp,userAddress,userGender,userBirth,userService) 
            VALUES ('$userId','$userPw','$userName','$userEmail','$userHp','$userAddress','$userGender','$userBirth','$userService')";
    $result = mysqli_query($conn,$sql);


    if($result===true){
        echo 1;
    }
    else{
        echo 0;
    }
?>