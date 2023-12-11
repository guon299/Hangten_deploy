<?
    include_once('./hangten_header.php');

    $SQL = "CREATE TABLE hangten_notice_table(
            idx         INT             NOT NULL    AUTO_INCREMENT,
            nSubject    VARCHAR(250)    NOT NULL,
            nContent    TEXT            NOT NULL,
            nName       VARCHAR(30)     NULL,
            nId         VARCHAR(16)     NULL,
            nHit        INT             NULL,
            nDate       timeStamp       DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY(idx)
        )ENGINE=MyISAM DEFAULT CHARSET=utf8mb4";
    
    $res = mysqli_query($conn ,$SQL);

    if($res==true){
        echo '테이블 생성 성공!';
    }
    else{
        echo '테이블 생성 실패';
    }

?>