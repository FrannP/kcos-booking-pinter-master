var position = $(window).scrollTop(); 

// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 50) {

   
      if(scroll > position) {

        if($('.sticky-header').hasClass("sticky-header--up")) {
          $('.sticky-header').removeClass("sticky-header--up");
          $('.sticky-header').addClass("sticky-header--down");
        }
        else {
          $('.sticky-header').addClass("sticky-header--down");
        }
      }
      else {
        if($('.sticky-header').hasClass("sticky-header--down")) {
          $('.sticky-header').removeClass("sticky-header--down");
          $('.sticky-header').addClass("sticky-header--up");
        }
        else {
          $('.sticky-header').addClass("sticky-header--up");
        }
      }

      position = scroll;

    }

    else {
      if($('.sticky-header').hasClass("sticky-header--up")) {
          $('.sticky-header').removeClass("sticky-header--up");
        }
    }
});

$(document).ready(function () {
  $('.nav-button').click(function () {

      $('.sticky-header').toggleClass('sticky-header--active');
      // $('.nav-button').toggleClass('nav-button--active')
      $('.nav-button__svg').toggleClass('nav-button__svg--active')

  });
});

$(document).ready(function () {

  var originalPosition = true;

  $('.nav-button').click(function () {
      if (originalPosition) {
          $(this).animate({ right: '342px' },"300ms", 'easeOutCubic', function () {});
      } else {
          $(this).animate({ right: '0px' },"300ms", 'easeOutCubic', function () {});
      }
      
      originalPosition = !originalPosition; 
  });
});


//sticky home button

$(document).ready(function() {
  var navLogo = $(".nav-logo-wrapper");
  var sticky = navLogo.offset().top;

  $(window).scroll(function() {
      if ($(window).scrollTop() > sticky) {
          navLogo.addClass("nav-logo-wrapper--sticky");
      } else {
          navLogo.removeClass("nav-logo-wrapper--sticky");
      }
  });
});





//HOME TO TOP


$(document).ready(function() {
  var scrollToTopBtn = $(".nav-logo-button");
  var rootElement = $("html, body");

  scrollToTopBtn.click(function() {
    rootElement.animate({ scrollTop: 0 }, "slow");
  });
});


//HEADER DOWN

  $(document).ready(function() {
    $(".header__button").click(function() {
        $("#to-main")[0].scrollIntoView({ behavior: 'smooth' });
    });
});