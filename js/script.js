 $(document).ready(function() {

  $('a[href*="#top"]')
  // Remove links that don't actually link to anything
  .click(function(event) {
    // On-page links

      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();

        });
      }

  });

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
      
      var tabs = $('#tabs');
      $('.tabs-content > div', tabs).each(function(i){
          if ( i != 0 ) $(this).hide(0);
      });
      tabs.on('click', '.tabs a', function(e){
          /* Предотвращаем стандартную обработку клика по ссылке */
          e.preventDefault();
  
          /* Узнаем значения ID блока, который нужно отобразить */
          var tabId = $(this).attr('href');
  
          /* Удаляем все классы у якорей и ставим active текущей вкладке */
          // $('.tab a #all').addClas('active');
          $('.tabs a',tabs).removeClass();
          $(this).addClass('active');
  
          /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
          $('.tabs-content > div', tabs).hide(0);
          $(tabId).show();
      });

      var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
      });
      // filter functions
      var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
          var number = $(this).find('.number').text();
          return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
          var name = $(this).find('.name').text();
          return name.match( /ium$/ );
        }
      };
      // bind filter button click
      $('.filters-button-group').on( 'click', 'li', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
      });
      // change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });





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



