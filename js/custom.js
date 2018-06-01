// JavaScript Document

$(document).ready(function() {
    // Форма обратной связи................................./
    
    var regVr22 = "<div class='messenger_load'>Сообщение обрабатывается...</div><br />";
    
    $("#send").click(function(){
    		$("#loadBar").html(regVr22).show();
    		var firstName = $("#firstName").val();
            var textarea = $("#textarea").val();
            var radio = $("#radio").val();
			var email = $("#email").val();
			console.log(radio)
    		$.ajax({
    			type: "POST",
    			url: "mail.php",
    			data: {"firstName": firstName, "radio": radio, "textarea": textarea, "email": email},
    			cache: false,
    			success: function(response){
    		var messageResp = "<div class='messenger_send'><span>";
    		var resultStat = ", cпасибо!<span>Ваше сообщение отправлено.</div>";
    		var oll = (messageResp + firstName + resultStat);
    				if(response == 1){
                    $("#loadBar").html(oll).fadeIn(3000);
    				$("#firstName").val("");
                    $("#textarea").val("");
                    $("#radio").val("");
    				$("#email").val("");
    				} else {
    		$("#loadBar").html(response).fadeIn(3000); }
    										}
    		});
    		return false;
    });


});