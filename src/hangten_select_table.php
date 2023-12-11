<?
    include_once('./hangten_header.php');

    $userId = $_POST['userId'];

    $sql = "SELECT  userGaib FROM hangten_table WHERE userId='$userId'";
    $result = mysqli_query($conn,$sql);

   
    if(mysqli_num_rows($result)>0){
        $record = mysqli_fetch_array($result);
        echo '{"가입일":"'.$record['userGaib'].'"}';
    }
    else{
        echo 0;
    }

?>