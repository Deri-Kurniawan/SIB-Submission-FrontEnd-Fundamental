/* eslint-disable no-undef */
import events from '../events/event';
import '../components/app-bar';
import '../components/search-bar';
import '../components/meal-list';
import '../components/meal-item';
import '../components/meal-detail-modal';
import '../components/scroll-to-top';

const $ = require('jquery');

const searchMealsByName = (e, keyword, baseUrl) => {
  $('meal-list').html('');

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
      if (responseJSON.meals != null) {
        renderResult(responseJSON.meals);
      } else {
        renderError(`Recipes by keyword <strong>${keyword}</strong> not found!`);
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

    $('meal-detail-modal .modal-body').html('');

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

  $('search-bar form').on('submit', (e) => {
    searchMealsByName(e, $('input#inputSearchElement').val(), baseUrl);
  });

  $('app-bar form').on('submit', (e) => {
    searchMealsByName(e, $('input#inputSearchElementAlternate').val(), baseUrl);
  });

  searchMealById(baseUrl);
};

export default main;
