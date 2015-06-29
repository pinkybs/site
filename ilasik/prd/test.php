<?php
ini_set('display_errors', '1');
ini_set('error_reporting', E_ALL & ~E_NOTICE);
error_reporting(1);


$handle = fopen("ilasik-city.txt", "r");
$aryBaseData = array();
$id=0;
if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        $aryCity = explode(',', $buffer);
		if ($aryCity) {
			$id++;
			$aryBaseData[] = array('id'=>$id, 'cityKey'=>$aryCity[1], 'cityName'=>$aryCity[0], 'hospital'=>$aryCity[2], 'site'=>trim($aryCity[3]));
		}

    }
    fclose($handle);
}

if ($aryBaseData) {
	echo json_encode($aryBaseData);

}

exit;
