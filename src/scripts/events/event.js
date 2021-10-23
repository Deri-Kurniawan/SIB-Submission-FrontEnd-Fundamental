/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import $ from 'jquery';

const mainEvent = () => {
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
    } else {
      $('scroll-to-top').fadeOut();
    }
  });
};

export default mainEvent;
