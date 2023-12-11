<?
    include_once('./hangten_header.php');

    $adminId         = $_POST['adminId'];          
    $adminPw         = $_POST['adminPw'];          
    $adminName       = $_POST['adminName'];        
    $adminEmail      = $_POST['adminEmail'];       
    $adminHp         = $_POST['adminHp'];                 
    $adminAddress    = $_POST['adminAddress'];              
    $adminGender     = $_POST['adminGender'];      
    
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