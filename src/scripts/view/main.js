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
                    renderError(`Keyword <strong>${keyword}</strong> Not Found!`);
                }
            },
            error: (responseMessage) => {
                renderError(responseMessage);
            }
        });

        $('meal-list').on('click', 'meal-item', function () {
            const mealId = $(this).data('mealid');
            $('.modal-body').html('');
            $.ajax({
                method: 'GET',
                url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
                success: (responseJSON) => {
                    const meal = responseJSON.meals[0];

                    const eachObjectData = (data, propertyValue, i = 1, max = 20) => {
                        let temp = '';
                        for (i; i <= max; i++) {
                            let propVal = data[propertyValue + i];
                            if (propVal != '' && propVal != null && propVal != ' ') {
                                temp += '<td>' + propVal + '</td>';
                            }
                        }
                        return temp;
                    }

                    // find params
                    let params = new URL(meal.strYoutube).searchParams;

                    $('.modal-title').html(meal.strMeal);
                    $('.modal-body').html('');
                    $('.modal-body').append(`
                        <div class="row">
                            <div class="col-12 col-md-12 col-lg-4 col-xl-4 my-sm-3 my-md-3">
                                <img src="${meal.strMealThumb}" class="card-img-top" style="width:100%; height:100%; transform: scaleZ(-1);" alt="${meal.strMealThumb} Thumb"/>
                            </div>
                            <div class="col-12 col-md-12 col-lg-8 col-xl-8">
                                <div class="ratio ratio-16x9">
                                  <iframe src="https://www.youtube.com/embed/${params.get('v')}" title="${meal.strMeal} Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                        <div class="my-4">
                            <h4>Instructions</h3>
                            <p class="justify-align-center">${meal.strInstructions}</p>

                            <table class="table table-hover table-bordered text-center" style="vertical-align: middle;">
                                <tr>
                                    <th class="bg-dark text-light">Ingredients</th>
                                    ${eachObjectData(meal, "strIngredient") || "-"}
                                </tr>
                                <tr>
                                    <th class="bg-dark text-light">Measures</th>
                                    ${eachObjectData(meal, "strMeasure") || "-"}
                                </tr>
                            </table>

                            <table class="table table-hover table-bordered text-center" style="vertical-align: middle;">
                                <tr class="bg-dark text-light">
                                    <th>Area</th>
                                    <th>Category</th>
                                    <th>Tags</th>
                                </tr>
                                <tr>
                                    <td>${meal.strArea || "-"}</td>
                                    <td>${meal.strCategory || "-"}</td>
                                    <td>${meal.strTags || "-"}</td>
                                </tr>
                            </table>
                
                        </div>
                    `);
                }
            });
        });

    });


    $(document).ajaxStart(() => {
        $('#loader').show();
    }).ajaxStop(() => {
        $('#loader').hide();
    });

};

export default main;