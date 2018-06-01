// JavaScript Document

$(document).ready(function () {
    // Форма обратной связи................................./


    var regVr22 = "<div class='messenger_load'>Сообщение обрабатывается...</div><br />";

    $(".js-quick-order").on("submit", function () {
        var $this = $(this);

        var $loadbar  = $this.find(".loadBar");
        $loadbar.html(regVr22).show();
        var firstName = $this.find(".firstName");
        var textarea = $this.find(".textarea");
        var radio = $this.find(".radio");
        var email = $this.find(".email");
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: {"firstName": firstName.val(), "radio": radio.val(), "textarea": textarea.val(), "email": email.val()},
            cache: false,
            success: function (response) {
                var messageResp = "<div class='messenger_send'><span>";
                var resultStat = ", cпасибо!<span>Ваше сообщение отправлено.</div>";
                var oll = (messageResp + firstName.val() + resultStat);
                if (response == 1) {
                    $loadbar.html(oll).fadeIn(3000);
                    firstName.val("");
                    textarea.val("");
                    radio.val("");
                    email.val("");
                } else {
                    $loadbar.html(response).fadeIn(3000);
                }
            }
        });
        return false;
    });


});