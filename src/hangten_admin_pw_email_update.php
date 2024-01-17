<?
    include_once('./hangten_header.php');

    $adminId = $_POST['adminId'];
    $adminEmail = $_POST['adminEmail'];
    $adminPw = $_POST['adminPw'];

    $SQL = "UPDATE hangten_admin_table SET adminPw='$adminPw'
            WHERE adminId='$adminId' AND adminEmail='$adminEmail'";
    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo 1;
    }
    else {
        echo 0;
    }

?>