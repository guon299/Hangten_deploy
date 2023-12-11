<?

    include_once('./hangten_header.php');

    $adminId = $_POST['adminId'];
    $adminPw = $_POST['adminPw'];

    $SQL = "SELECT * FROM hangten_admin_table
            WHERE adminId='$adminId' AND adminPw='$adminPw'";
    
    $res = mysqli_query($conn, $SQL);

    if(mysqli_num_rows($res) > 0){
        $record = mysqli_fetch_array($res);
        echo '{"아이디":"'.$record['adminId'].'", "이름":"'.$record['adminName'].'","이메일":"'.$record['adminEmail'].'", "휴대폰":"'.$record['adminHp'].'", "주소":"'.$record['adminAddress'].'"}';
    }
    else {
        echo '';
    }
?>