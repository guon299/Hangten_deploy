<?
    include_once('./hangten_header.php');

    $nSubject = "행텐의 모든 핏!";
    $nContent = "내용";
    $nName = "브랜디드 라이프스타일 코리아 주식회사";
    $nId = "kkoma1221";

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