<?php 
$to  = $_POST['email'];

$subject = "������ 3 ����� �� ���������� �� ��������� �� YouTube";

$message = ' 
<html> 
    <head> 
        <title>Birthday Reminders for August</title> 
    </head> 
    <body> 
        <p>������������, ���� �� ������ ���������� ������ 3 ����� �� ���������� �� ��������� �� YouTube:</p>
		<p>���� 1 https://www.youtube.com/watch?v=IW2w0Elxz3o</p>
		<p>���� 2 https://www.youtube.com/watch?v=E0eu4LEnBQI</p>
		<p>���� 3 https://www.youtube.com/watch?v=lTXcuTpUeK4</p>
		<p>����� � ����� 56 �����������, �����������������: 8 �����, 53 ������.</p>
		<p>������ �������� ����� ������� �� �������� �����: http://vechnoeletotv.ru/youtube</p>
		<p>� ������ ������ ���� ��������� ����� 3990 ������, 15.02.2017 ���� ���������� �� 4990 ������, ������� ���������� �� �������� ����.</p>
		<p>���� �� ������ ������ ���������, �� �������� ��� ���������: https://vk.com/whitiks � ������ �� ��� ���� ������� � ������ ��������� ��� ������ �� ����� � ��������� ��� ����� ������ ������ ������.</p>
		<p>C ���������, ��������� �������.</p>
    </body> 
</html>'; 

$headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
$headers .= "From: ��������� ������� <youtube@vechnoeletotv.ru>\r\n"; 
$headers .= "Bcc: birthday-archive@example.com\r\n";

$fp = fopen(dirname(__FILE__).'/email_list.csv', 'a');
$row = array( $to, date("j F Y, G:i") );
fputcsv($fp, $row, ';');
?>