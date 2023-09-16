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

// $(window).ready(function () {
//   $('.nav-button').click(function () {
//       $('.slide-nav').slideToggle();
//   });
// });

$(document).ready(function () {
  $('.nav-button').click(function () {

      $('.sticky-header').toggleClass('sticky-header--active');
      // $('.nav-button').toggleClass('nav-button--active')
      $('.nav-button__svg').toggleClass('nav-button__svg--active')

  });
});

$(document).ready(function () {

  var originalPosition = true; // Variable to track the original position
  
  // Handle click on the fixed div
  $('.nav-button').click(function () {
      if (originalPosition) {
          $(this).animate({ right: '342px' },"300ms", 'easeOutCubic', function () {});
      } else {
          $(this).animate({ right: '0px' },"300ms", 'easeOutCubic', function () {});
      }
      
      originalPosition = !originalPosition; // Toggle the position
  });
});
