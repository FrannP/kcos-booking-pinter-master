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
    var $line = $('.faq-underline');
    var $expander = $('.question__button');

    $head.on('click', toggleBody);

    function toggleBody() {
        var $currentItem = $(this).closest('.accordion__item');

        if (!$currentItem.hasClass('active')) {
            // Close the previously open accordion
            $('.accordion__item.active').removeClass('active');
            $('.faq-underline--active').removeClass('faq-underline--active');
            $('.question__button').html('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2969 3.5625H12.7031C12.8281 3.5625 12.8906 3.625 12.8906 3.75V20.25C12.8906 20.375 12.8281 20.4375 12.7031 20.4375H11.2969C11.1719 20.4375 11.1094 20.375 11.1094 20.25V3.75C11.1094 3.625 11.1719 3.5625 11.2969 3.5625Z" fill="white"/><path d="M4.125 11.1094H19.875C20 11.1094 20.0625 11.1719 20.0625 11.2969V12.7031C20.0625 12.8281 20 12.8906 19.875 12.8906H4.125C4 12.8906 3.9375 12.8281 3.9375 12.7031V11.2969C3.9375 11.1719 4 11.1094 4.125 11.1094Z" fill="white"/></svg>');

            // Open the clicked accordion
            $currentItem.addClass('active');
            $currentItem.find('.faq-underline').addClass('faq-underline--active');
            $currentItem.find('.question__button').html('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.125 11.1094H19.875C20 11.1094 20.0625 11.1719 20.0625 11.2969V12.7031C20.0625 12.8281 20 12.8906 19.875 12.8906H4.125C4 12.8906 3.9375 12.8281 3.9375 12.7031V11.2969C3.9375 11.1719 4 11.1094 4.125 11.1094Z" fill="white"/></svg>');

            $body.slideUp();
            $currentItem.find('.js-accordion__body').slideDown();
        } else {
            // Close the clicked accordion
            $currentItem.removeClass('active');
            $currentItem.find('.faq-underline').removeClass('faq-underline--active');
            $currentItem.find('.js-accordion__body').slideUp();
            $currentItem.find('.question__button').html('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2969 3.5625H12.7031C12.8281 3.5625 12.8906 3.625 12.8906 3.75V20.25C12.8906 20.375 12.8281 20.4375 12.7031 20.4375H11.2969C11.1719 20.4375 11.1094 20.375 11.1094 20.25V3.75C11.1094 3.625 11.1719 3.5625 11.2969 3.5625Z" fill="white"/><path d="M4.125 11.1094H19.875C20 11.1094 20.0625 11.1719 20.0625 11.2969V12.7031C20.0625 12.8281 20 12.8906 19.875 12.8906H4.125C4 12.8906 3.9375 12.8281 3.9375 12.7031V11.2969C3.9375 11.1719 4 11.1094 4.125 11.1094Z" fill="white"/></svg>');
        }
    }
});
