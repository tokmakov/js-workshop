<?php
// файл assets/picture.php
$_POST['handler'] = $_SERVER['PHP_SELF'];
sleep(3);
echo var_dump($_POST);
echo var_dump($_FILES);
