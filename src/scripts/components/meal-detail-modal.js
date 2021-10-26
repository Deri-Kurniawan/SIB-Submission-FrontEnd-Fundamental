/* eslint-disable no-undef */
const $ = require('jquery');

class MealDetailModal extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set meal(meal) {
    this._meal = meal;
    this.renderMealDetail();
  }

  eachObjectData(propertyName, start = 1, max = 20) {
    let temp = '';
    for (let i = start; i <= max; i += 1) {
      const propVal = this._meal[propertyName + i];
      if (propVal !== '' && propVal != null && propVal !== ' ') {
        temp += `<td>${propVal}</td>`;
      }
    }
    return temp;
  }

  render() {
    this.innerHTML = `
      <div class="modal fade" id="detailMealModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="detailMealModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-md modal-lg modal-xl">
              <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-uppercase" id="detailMealModalLabel">No Data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" title="Close"></button>
                  </div>
                  <div class="modal-body">
                    <h6 class="text-center">No Data</h6>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="col-12 btn btn-danger" data-bs-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
    `;
  }

  renderMealDetail() {
    const params = new URL(this._meal.strYoutube || 'https://example.com/?v=').searchParams;
    const YTVideoID = params.get('v');

    $('meal-detail-modal .modal-title').html(this._meal.strMeal || 'Error Encountered!');
    $('meal-detail-modal .modal-body').html('');
    $('meal-detail-modal .modal-body').append(`
        <div class="row">
            <div class="col-12 col-md-12 col-lg-4 col-xl-4 my-sm-2 my-md-2 my-1 shadow">
                <a href="${this._meal.strMealThumb || '#'}" target="${(this._meal.strMealThumb) ? '_blank' : ''}" title="click to see full image">
                    <img src="${this._meal.strMealThumb || '-'}" class="card-img-top" style="width:100%; height:100%;" alt="${this._meal.strMealThumb || '-'} Thumb"/>
                </a>
            </div>
            <div class="col-12 col-md-12 col-lg-8 col-xl-8 my-sm-2 my-md-2 my-1 shadow">
                <div class="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/${YTVideoID || '-'}" title="${this._meal.strMeal || '-'} Tutorial Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="my-4">
            <h4>Instructions</h3>
            <p style="text-indent: 3%">${this._meal.strInstructions || '-'}</p>
        
            <div class="overflow-auto my-2">
              <table class="table table-bordered text-center align-middle shadow">
                  <tr>
                      <th>Ingredients</th>
                      ${this.eachObjectData('strIngredient') || '<td>-</td>'}
                  </tr>
                  <tr>
                      <th>Measures</th>
                      ${this.eachObjectData('strMeasure') || '<td>-</td>'}
                  </tr>
              </table>
            </div>
            <div class="overflow-auto my-2 shadow">
              <table class="table table-bordered text-center align-middle">
                  <tr>
                      <th>Area</th>
                      <th>Category</th>
                      <th>Tags</th>
                  </tr>
                  <tr>
                      <td>${this._meal.strArea || '-'}</td>
                      <td>${this._meal.strCategory || '-'}</td>
                      <td>${this._meal.strTags || '-'}</td>
                  </tr>
              </table>
            </div>
        </div>
    `);
  }
}

customElements.define('meal-detail-modal', MealDetailModal);
