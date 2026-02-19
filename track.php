// <?php
// require __DIR__ . "/../secure/analytics/db.php";

// // Coleta dados enviados pelo JS
// $ip       = $_SERVER['REMOTE_ADDR']; //$_POST['ip'] ?? '';
// //$country  = $_POST['country'] ?? '';
// //$city     = $_POST['city'] ?? '';
// $device   = $_POST['device'] ?? '';
// $browser  = $_POST['browser'] ?? '';
// $page     = $_POST['page'] ?? '';

// $sql = $conn->prepare("
//     INSERT INTO visits (ip, country, city, device, browser, page)
//     VALUES (?, ?, ?, ?, ?, ?)
// ");

// $sql->bind_param("ssssss", $ip, $country, $city, $device, $browser, $page);
// $sql->execute();

// echo "ok";
