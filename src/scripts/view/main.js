/* eslint-disable no-undef */
import $ from 'jquery';
import mainEvent from '../events/event';
import '../components/app-bar';
import '../components/search-bar';
import '../components/meal-list';
import '../components/meal-item';
import '../components/meal-detail-modal';
import '../components/scroll-to-top';

const main = () => {
  mainEvent();

  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

  $('search-bar > form').on('submit', (e) => {
    $('meal-list').html('');

    const renderResult = (meals) => {
      document.querySelector('meal-list').meals = meals;
    };

    const renderError = (message) => {
      document.querySelector('meal-list').renderError = message;
    };

    const keyword = $('input#inputSearchElement').val();
    e.preventDefault();
    $.ajax({
      url: `${baseUrl}search.php?s=${keyword}`,
      method: 'GET',
      success: (responseJSON) => {
        if (responseJSON.meals != null) {
          renderResult(responseJSON.meals);
        } else {
          renderError(`Keyword <strong>${keyword}</strong> Not Found!`);
        }
      },
      error: (responseMessage) => {
        renderError(responseMessage);
      },
    });
  });

  $('meal-list').on('click', 'meal-item', function () {
    const mealId = $(this).data('mealid');
    $('meal-detail-modal .modal-body').html('');
    $.ajax({
      method: 'GET',
      url: `${baseUrl}lookup.php?i=${mealId}`,
      success: (responseJSON) => {
        document.querySelector('meal-detail-modal').meal = responseJSON.meals[0];
      },
    });
  });
};

export default main;
