<?php
$secret = 'katzav_deploy_2024';
$payload = file_get_contents('php://input');
$sig = 'sha256=' . hash_hmac('sha256', $payload, $secret);

if (!hash_equals($sig, $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '')) {
    http_response_code(403);
    exit('Forbidden');
}

shell_exec('/bin/bash /home/u287756060/deploy.sh >> /home/u287756060/deploy.log 2>&1 &');
echo 'OK';

