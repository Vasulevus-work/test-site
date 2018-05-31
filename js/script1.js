$(document).ready(function() {

	//E-mail Ajax Send
	var $form = $("form");
	$form.submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$form.html("<h1 style='text-align:center;margin-top: 178px;margin-bottom: 188px; font-size:32px'>Thank you!111</h1>");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
