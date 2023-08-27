<?php

// Показ сообщений об ошибках
error_reporting(E_ALL);

// Установим часовой пояс по умолчанию
date_default_timezone_set("Europe/Moscow");

// Переменные, используемые для JWT
$iat = time();
$key = "sAt8g2oxXtK8bH78PATS"; 