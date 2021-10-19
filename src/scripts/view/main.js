import $ from 'jquery';
import '../components/app-bar';
import '../components/search-bar';
import '../components/meal-list';
import '../components/meal-item';

const main = () => {
    $('search-bar > form').on('submit', (e) => {
        const renderResult = (meals) => {
            document.querySelector("meal-list").meals = meals;
        }

        const renderError = (message) => {
            document.querySelector("meal-list").renderError = message;
        }

        const keyword = $('input#inputSearchElement').val();
        e.preventDefault();
        $.ajax({
            url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`,
            method: 'GET',
            success: (responseJSON) => {
                if (responseJSON.meals != null) {
                    renderResult(responseJSON.meals);
                } else {
                    renderError(`Meal ${keyword} Not Found!`);
                }
            },
            error: (responseMessage) => {
                renderError(responseMessage);
            }
        });

    });

    $(document).ajaxStart(() => {
        $('.ajax-loading').addClass('ajax-loading-start');
    }).ajaxStop(() => {
        $('.ajax-loading').removeClass('ajax-loading-start');
    });

};

export default main;