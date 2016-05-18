<?php 
    $updatePack = file_get_contents("php://input");
    $request = json_decode($updatePack);
    $uname=$request->uname;
    $pwd=$request->pwd;
    
    $lev = levenshtein($uname, $pwd);
    echo $lev;   
?>
