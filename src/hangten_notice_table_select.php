<?
    include_once('./hangten_header.php');

    $sql = "SELECT * FROM hangten_notice_table ORDER BY nDate DESC";
    
    $res = mysqli_query($conn, $sql);

    if(mysqli_num_rows($res) > 0){
        $arr = array();
        while( $row = mysqli_fetch_array($res)){
            array_push($arr, array(
                '번호' => $row['idx'],
                '제목' => htmlspecialchars_decode($row['nSubject'], ENT_QUOTES),
                '내용' => htmlspecialchars_decode($row['nContent'], ENT_QUOTES),
                '작성자' => $row['nName'],
                '아이디' => $row['nId'],
                '조회수' => $row['nHit'],
                '작성일' => $row['nDate']
            ));
        }
    }

    $json = json_encode($arr, JSON_UNESCAPED_UNICODE);
    echo $json;
    
?>