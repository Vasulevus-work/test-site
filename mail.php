<?php
    header("Content-type: text/html; charset=utf-8");
    //**********************************************
    if(empty($_POST['js'])){
    
        $log =="";
        $error="no"; //флаг наличия ошибки
        
        		$firstName = addslashes($_POST['firstName']);
        		$firstName = htmlspecialchars($firstName);
        		$firstName = stripslashes($firstName);
        		$firstName = trim($firstName);
        		
        		$email = addslashes($_POST['email']);
        		$email = htmlspecialchars($email);
        		$email = stripslashes($email);
        		$email = trim($email);
        
        		$textarea = addslashes($_POST['textarea']);
        		$textarea = htmlspecialchars($textarea);
        		$textarea = stripslashes($textarea);
        		$textarea = trim($textarea);
        
         		$radio = addslashes($_POST['radio']);
        		$radio = htmlspecialchars($radio);
        		$radio = stripslashes($radio);
        		$radio = trim($radio);
                
         	 
        //Проверка правильность имени    
        if(!$firstName || strlen($firstName)>30 || strlen($firstName)<3) {
        $log.="<li>Неправильно заполнено поле <strong>\"Ваше имя\"</strong> (3-30 символов)</li>"; $error="yes"; }
        
        if(!$textarea || strlen($textarea)<10 || strlen($textarea)>100) {
            $log.="<li>Неправильно заполнено поле <strong>\"Сообщение\"</strong> (10-100 символов)</li>"; $error="yes"; }

        

        
        //Проверка email адреса
        function isEmail($email){
                return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i"
                        ,$email));
            } 
        			
        if($email == '') {
        	$log .= "<li>Пожалуйста, введите <strong>Ваш E-mail</strong></li>";
        	$error = "yes";
                        }			
        
        else if(!isEmail($email)){
        	$log .= "<li>Вы ввели неправильный <strong>e-mail</strong>. Пожалуйста, исправьте его</li>";
        	$error = "yes";
                        }
        
          
        //Если нет ошибок отправляем email  
        if($error=="no"){
            //Отправка письма админу о новом комментарии
            $to = "digrandcom@gmail.com";//Ваш e-mail адрес
            $message = " Марка $radio <br><br> Имя: $firstName  <br><br> Сообщение: $textarea <br><br> E-mail: $email" ;
            $from = $email;
            $subject = '=?utf-8?B?'.base64_encode('Сообщение с di-grand.com').'?=';
            $headers = "Content-type: text/html; charset=UTF-8 \r\n";
            $headers .= 'From: digrand@test.ru';
            mail($to, $subject, $message, $headers);
            echo "1"; //Всё Ok!
        }
        else { 
        		echo "<div class='messenger_error'><span>Ошибка</span><ol>".$log."</ol></div><br />"; //Нельзя отправлять пустые сообщения
        
        }
    }
?>