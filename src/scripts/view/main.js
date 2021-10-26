/* eslint-disable no-undef */
import events from '../events';
import '../components/app-bar';
import '../components/search-bar';
import '../components/meal-list';
import '../components/meal-item';
import '../components/meal-detail-modal';
import '../components/scroll-to-top';
import '../components/page-loader';

const $ = require('jquery');

const searchMealsByName = (e, keyword, baseUrl) => {
  $('meal-list').html('');

  $('meal-detail-modal .modal-body').html('');

  const renderResult = (meals) => {
    document.querySelector('meal-list').meals = meals;
  };

  const renderError = (message) => {
    document.querySelector('meal-list').renderError = message;
  };

  e.preventDefault();

  $.ajax({
    url: `${baseUrl}search.php`,
    method: 'GET',
    data: {
      s: keyword,
    },
    success: (responseJSON) => {
      if (responseJSON.meals !== null) {
        renderResult(responseJSON.meals);
      } else {
        renderError(`Recipes by meal name <strong>${keyword}</strong> not found!`);
      }
    },
    error: (responseMessage) => {
      renderError(responseMessage);
    },
  });
};

const searchMealById = (baseUrl) => {
  $('meal-list').on('click', 'meal-item', function () {
    const mealId = $(this).data('mealid');

    $('meal-detail-modal .modal-header h5').text('Loading...');
    $('meal-detail-modal .modal-body').html('Loading...');

    $.ajax({
      method: 'GET',
      url: `${baseUrl}lookup.php`,
      data: {
        i: mealId,
      },
      success: (responseJSON) => {
        document.querySelector('meal-detail-modal').meal = responseJSON.meals[0];
      },
    });
  });
};

const main = () => {
  events();

  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

  window.addEventListener('load', (e) => {
    searchMealsByName(e, '', baseUrl);
  });

  $('search-bar form').on('submit', (e) => {
    searchMealsByName(e, $('input#inputSearchElement').val(), baseUrl);
  });

  $('app-bar form').on('submit', (e) => {
    searchMealsByName(e, $('input#inputSearchElementAlternate').val(), baseUrl);
  });

  searchMealById(baseUrl);
};

export default main;
