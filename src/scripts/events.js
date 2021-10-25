/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
const $ = require('jquery');

const events = () => {
  $(document).ajaxStart(() => {
    $('svg.loader').show();
    $('body').addClass('on-loading');
  }).ajaxStop(() => {
    $('svg.loader').hide();
    $('body').removeClass('on-loading');
  });

  window.addEventListener('scroll', () => {
    if (scrollY >= 1) {
      $('app-bar').addClass('shadow');
    } else {
      $('app-bar').removeClass('shadow');
    }

    if (scrollY >= (screen.height / 5)) {
      $('scroll-to-top').fadeIn();
      $('app-bar form').fadeIn();
    } else {
      $('scroll-to-top').fadeOut();
      $('app-bar form').fadeOut();
    }
  });

  $('input#inputSearchElement').on('input', () => {
    $('input#inputSearchElementAlternate').val($('input#inputSearchElement').val());
  });

  $('input#inputSearchElementAlternate').on('input', () => {
    $('input#inputSearchElement').val($('input#inputSearchElementAlternate').val());
  });
};

export default events;
