<?php
$to = 'autosteklosnab@yandex.ru' ; 
$subject = "Вы зарегистрировались на сайте"; 
$message = ' <p>Здрауствуйте Максим, Ваши данные для входа.</p> </br> 
<b>Логин: </b><p>ыфттсдтдтытст</p> </br><b>Пароль: </b><p>осышвфтсшдтыдштстыдтдс</p></br>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: От кого письмо <auth@api.loaderpro.ru>\r\n"; 
$headers .= "Reply-To: auth@api.loaderpro.ru\r\n"; 

mail($to, $subject, $message, $headers); 
echo 'Успешно';