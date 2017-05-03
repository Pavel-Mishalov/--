<?php 
$to  = $_POST['email'];

$subject = "Первые 3 урока из видеокурса по заработку на YouTube";

$message = ' 
<html> 
    <head> 
        <title>Birthday Reminders for August</title> 
    </head> 
    <body> 
        <p>Здравствуйте, ниже вы можете посмотреть первые 3 урока из видеокурса по заработку на YouTube:</p>
		<p>Урок 1 https://www.youtube.com/watch?v=IW2w0Elxz3o</p>
		<p>Урок 2 https://www.youtube.com/watch?v=E0eu4LEnBQI</p>
		<p>Урок 3 https://www.youtube.com/watch?v=lTXcuTpUeK4</p>
		<p>Всего в курсе 56 видеоуроков, продолжительность: 8 часов, 53 минуты.</p>
		<p>Полное описание курса читайте на странице курса: http://vechnoeletotv.ru/youtube</p>
		<p>В данный момент цена видеокурс всего 3990 рублей, 15.02.2017 цена поднимется до 4990 рублей, успейте приобрести по выгодной цене.</p>
		<p>Если вы решите купить видеокурс, то напишите мне Вконтакте: https://vk.com/whitiks я отвечу на все ваши вопросы и пришлю реквизиты для оплаты на карту в сбербанке или любой другой способ оплаты.</p>
		<p>C уважением, Александр Беляшов.</p>
    </body> 
</html>'; 

$headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
$headers .= "From: Александр Беляшов <youtube@vechnoeletotv.ru>\r\n"; 
$headers .= "Bcc: birthday-archive@example.com\r\n";

$fp = fopen(dirname(__FILE__).'/email_list.csv', 'a');
$row = array( $to, date("j F Y, G:i") );
fputcsv($fp, $row, ';');
?>