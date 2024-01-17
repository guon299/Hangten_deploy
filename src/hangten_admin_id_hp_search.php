<?
    include_once('./hangten_header.php');

    $adminName = $_POST['adminName'];
    $adminHp = $_POST['adminHp'];

    $SQL = "SELECT adminId, adminGaib FROM hangten_admin_table
            WHERE adminName='$adminName' AND adminHp='$adminHp'";
    $res = mysqli_query($conn, $SQL);

    if(mysqli_num_rows($res)>0){
        $record = mysqli_fetch_array($res);
        echo '{"아이디":"'.$record['adminId']'", "가입일":"'.$record['adminGaib']'"}';
    }
    else {
        echo '';
    }
?>