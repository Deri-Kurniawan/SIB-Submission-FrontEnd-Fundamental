/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
const $ = require('jquery');

const events = () => {
  $(window).ajaxStart(() => {
    $('svg.loader').show();
    $('body').addClass('on-loading');
  }).ajaxStop(() => {
    $('svg.loader').hide();
    $('body').removeClass('on-loading');
  });

  $(window).on('scroll', () => {
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

  $(window).on('keyup', (e) => {
    if (e.key.toLowerCase === 'Escape'.toLowerCase) {
      $('meal-detail-modal .modal-header .btn-close').trigger('click');
    }
  });

  $('input#inputSearchElement').on('input', () => {
    $('input#inputSearchElementAlternate').val($('input#inputSearchElement').val());
  });

  $('input#inputSearchElementAlternate').on('input', () => {
    $('input#inputSearchElement').val($('input#inputSearchElementAlternate').val());
  });

  $('meal-detail-modal .modal-header .btn-close').on('click', () => {
    $('meal-detail-modal .modal-body').html('');
  });

  $('meal-detail-modal .modal-footer button.btn-danger').on('click', () => {
    $('meal-detail-modal .modal-body').html('');
  });
};

export default events;
