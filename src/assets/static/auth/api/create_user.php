<?php
// Заголовки
header("Access-Control-Allow-Origin: http://my.loaderpro.ru/auth/");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Подключение к БД
// Файлы, необходимые для подключения к базе данных
include_once __DIR__."/Config/Database.php";
include_once __DIR__."/Objects/User.php";

// Получаем соединение с базой данных
$database = new Database();
$db = $database->getConnection();

// Создание объекта "User"
$user = new User($db);

// Получаем данные
$data = json_decode(file_get_contents("php://input"));

// Устанавливаем значения
$user->firstname = $data->firstname;
$user->lastname = $data->lastname;
$user->email = $data->email;
$user->password = $data->password;
$user->company = $data->company;
$user->employee = $data->employee;
$user->address = $data->address;
$user->city = $data->city;
$user->phone = $data->phone;

// Поверка на существование e-mail в БД
$email_exists = $user->emailExists();

// Создание пользователя
if (
    !empty($user->firstname) &&
    !empty($user->email) &&
    $email_exists == 0 &&
    !empty($user->password) &&
    $user->create()
) {
    // Устанавливаем код ответа
    http_response_code(200);

    // Покажем сообщение о том, что пользователь был создан
    echo json_encode(array("message" => "Вы успешно зарегестрированы, данные для доступа в систему отправлены на почту."));
$to = $user->email ; 
$subject = "Вы зарегистрировались на сайте"; 
$message = ' <p>Здрауствуйте '.$data->firstname.', Ваши данные для входа.</p> </br> 
<b>Логин: </b><p>'.$user->email.'</p> </br><b>Пароль: </b><p>'.$user->password.'</p></br>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: От кого письмо <auth@my.loaderpro.ru>\r\n"; 
$headers .= "Reply-To: auth@my.loaderpro.rum\r\n"; 

mail($to, $subject, $message, $headers); 
}

// Сообщение, если не удаётся создать пользователя
else {

    // Устанавливаем код ответа
    http_response_code(400);

    // Покажем сообщение о том, что создать пользователя не удалось
    echo json_encode(array("message" => "Ошибка, такой пользователь уже зарегестрирован в системе."));/*Пользователь уже существует*/
}
