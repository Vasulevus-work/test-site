 $(document).ready(function() {



     $('select').niceSelect();
     $(".flexnav").flexNav();

     $('.popup').magnificPopup({
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
          beforeOpen: function() {
            console.log('testetafr');
             this.st.mainClass = this.st.el.attr('data-effect');
          }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
      });
      


    setup_slight_scroll_to_anchors();
   
    function setup_slight_scroll_to_anchors() {
        $('a[href^="#"]').not('.popup').click(function() {
            var link = jQuery(this);
            if (link.attr('href') == '#') return;
            var target = link.attr('href');
            var target_top = jQuery(target).offset().top;
            jQuery('html, body').animate({
               scrollTop: target_top
            }, 1000);
            return false;
        });
    }


    $('.image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows:false,
    });
});


function myFunction() {
    var x = document.querySelector(".option");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


