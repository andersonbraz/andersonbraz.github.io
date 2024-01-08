<?php
	
	$botToken	= "626693263:AAHR4uhelFYO8fqIw0fQBQin162vYZ9zU9g";
	$website	= "https://api.telegram.org/bot".$botToken;
	
	//$update = file_get_contents("php://input");
	$update		= file_get_contents($website."/getUpdates");
	$result 	= json_decode($update, TRUE);
	$messages	= $result['result'];
	$counter	= count($messages);

	for($i = 0; $i <= $counter; $i++){
		
		$chat = $messages[$i]['message']['from']['id'];
		$name = $messages[$i]['message']['from']['first_name'];
		$text = $messages[$i]['message']['text'];

		$msg = urlencode("Olá! ".$name.", sou um robô que encontra-se em desenvolvimento.");

		echo $chat."<br />";
		echo $name."<br />";
		echo $text."<br />";

		if($text != "/start" && $chat != ""){
			//$sender = file_get_contents("https://api.telegram.org/bot626693263:AAHR4uhelFYO8fqIw0fQBQin162vYZ9zU9g/sendMessage?chat_id=".$chat."&text=".$msg);
		}

	}
	//$messages = $result['result'];
	//echo $messages[0]['message']['from']['first_name'];
	//echo "<br />";
	//echo $messages;

	echo json_encode($messages);

?>