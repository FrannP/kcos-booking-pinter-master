// $(function () {

//   var $head = $('.js-accordion__head');
//   var $body = $('.js-accordion__body');

//   $('.accordion__item').first().addClass('active');
//   $body.first().slideDown();

//   $head.on('click', toggleBody);

//   function toggleBody() {

//     if (!$(this).closest('.accordion__item').hasClass('active')) {
//       $('.accordion__item').removeClass('active');
//       var $current = $(this).next()
//       $current.closest('.accordion__item').addClass('active');
//       $body.not($current).slideUp();
//       $current.slideToggle();
//     }

//   }

// });


$(function () {

  var $head = $('.js-accordion__head');
  var $body = $('.js-accordion__body');

  $head.on('click', toggleBody);

  function toggleBody() {
      var $currentItem = $(this).closest('.accordion__item');
      var $line = $currentItem.find('.faq-underline')
      var $expander = $currentItem.find('.question__button')
      
      if (!$currentItem.hasClass('active')) {
          $('.accordion__item').removeClass('active');
          $currentItem.addClass('active');

          $line.addClass('faq-underline--active')

          $expander.html("-");

          $body.slideUp();
          $currentItem.find('.js-accordion__body').slideDown();
      } else {
          $currentItem.removeClass('active');
          $currentItem.find('.js-accordion__body').slideUp();

          $expander.html("+");


          $line.removeClass('faq-underline--active');
      }
  }
});

