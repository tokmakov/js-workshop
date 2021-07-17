<?php
$data = [];
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $data = [
        'method' => 'GET',
        'message' => 'Ответ на GET-запрос',
        'data' => ['response', 'get', 'request']
    ];
}
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = [
        'method' => 'POST',
        'message' => 'Ответ на POST-запрос',
        'data' => ['response', 'post', 'request'],
        'body' => json_decode(file_get_contents('php://input'))
    ];
}
header('Content-Type: application/json');
echo json_encode($data);
