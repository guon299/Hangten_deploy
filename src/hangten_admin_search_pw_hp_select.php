<?
    include_once('./hangten_header.php');

    $adminId = $_POST['adminId'];
    $adminName = $_POST['adminName'];
    $adminHp = $_POST['adminHp'];

    $SQL = "SELECT * FROM hangten_admin_table
            WHERE adminId='$adminId' AND adminName='$adminName' AND adminHp='$adminHp'";
    $res = mysqli_query($conn, $SQL);

    if(mysqli_num_rows($res)>0){
        echo 1;
    }
    else {
        echo 0;
    }
?>