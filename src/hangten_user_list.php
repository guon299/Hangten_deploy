<?
    include_once('./hangten_header.php');


    $sql = "SELECT  * FROM hangten_table";
    $result = mysqli_query($conn,$sql);

    if(mysqli_num_rows($result)>0){
        $arr = array();
        while($row = mysqli_fetch_array($result)){
            array_push($arr,array(
                '아이디'     => $row['userId'],
                '비밀번호'     => $row['userPw'],
                '이름'     => $row['userName'],
                '이메일'     => $row['userEmail'],
                '휴대폰'     => $row['userHp'],
                '주소'     => $row['userAddress'],
                '성별'     => $row['userGender'],
                '생년월일'     => $row['userBirth'],
                '동의'     => $row['userService'],
                '가입날짜'     => $row['userGaib']
            ));
        }
    }
    $json = json_encode($arr, JSON_UNESCAPED_UNICODE);
    echo $json;

?>