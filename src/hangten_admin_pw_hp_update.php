<?
    include_once('./hangten_header.php');

    $adminId = $_POST['adminId'];
    $adminHp = $_POST['adminHp'];
    $adminPw = $_POST['adminPw'];

    $SQL = "UPDATE hangten_admin_table SET adminPw='$adminPw'
            WHERE adminId='$adminId' AND adminHp='$adminHp'";
    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo 1;
    }
    else {
        echo 0;
    }

?>