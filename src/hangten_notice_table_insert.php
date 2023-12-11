<?
    include_once('./hangten_header.php');

    $nSubject = htmlspecialchars($_POST['nSubject'], ENT_QUOTES);
    $nContent = htmlspecialchars($_POST['nContent'], ENT_QUOTES);
    $nName = $_POST['nName'];
    $nId = $_POST['nId'];

    $SQL = "INSERT INTO hangten_notice_table (nSubject, nContent, nName, nId)
            VALUES ('$nSubject', '$nContent', '$nName', '$nId')";
    
    $result = mysqli_query($conn, $SQL);

    if($result==true){
        echo 1;
    }
    else {
        echo 0;
    }
?>