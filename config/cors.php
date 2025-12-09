<?php

return [

'paths' => ['api/*', 'sanctum/csrf-cookie'],

'allowed_methods' => ['*'],

'allowed_origins' => [
'http://ganin.test',
'http://admin.ganin.test',
'http://crm.ganin.test',
'http://crm-admin.ganin.test',
],

'allowed_headers' => ['*'],

'exposed_headers' => [],

'max_age' => 0,

'supports_credentials' => true,

];