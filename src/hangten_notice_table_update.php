<?
    include_once('./hangten_header.php');

    $idx = $_POST['idx'];
    $nName = $_POST['nName'];
    $nId = $_POST['nId'];
    $nSubject = htmlspecialchars($_POST['nSubject'], ENT_QUOTES);
    $nContent = htmlspecialchars($_POST['nContent'], ENT_QUOTES);


    $SQL = "UPDATE hangten_notice_table
            SET nName='$nName', nId='$nId', nSubject='$nSubject', nContent='$nContent'
            WHERE idx='$idx'";
    
    $res = mysqli_query($conn, $SQL);
    if($res==true){
        echo 1;
    }
    else {
        echo 0;
    }

?>