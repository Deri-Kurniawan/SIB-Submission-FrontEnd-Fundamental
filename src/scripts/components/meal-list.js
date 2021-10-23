/* eslint-disable no-undef */
class MealList extends HTMLElement {
  constructor() {
    super();
    this.classList.add('row', 'row-cols-1', 'row-cols-2', 'row-cols-sm-3', 'row-cols-md-4', 'row-cols-lg-5', 'row-cols-xl-5', 'g-3');
  }

  set meals(data) {
    this._meals = data;
    this.render();
  }

  render() {
    this.setAttribute('title', 'click to see detail');
    this.setAttribute('data-bs-toggle', 'modal');
    this.setAttribute('data-bs-target', '#detailMealModal');
    this.innerHTML = '';
    this.setAttribute('data-bs-toggle', 'modal');
    this.setAttribute('data-bs-target', '#detailMealModal');
    this._meals.forEach((meal) => {
      const mealItemElement = document.createElement('meal-item');
      mealItemElement.classList.add('col');
      mealItemElement.setAttribute('data-mealid', meal.idMeal);
      mealItemElement.meal = meal;
      this.appendChild(mealItemElement);
    });
  }

  set renderError(message) {
    this.removeAttribute('data-bs-toggle');
    this.removeAttribute('data-bs-target');
    this.innerHTML = '';
    this.innerHTML = `
      <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100 error-toast">
          <div class="toast-header">
              <span class="me-auto">${message}</span>
          </div>
            <div class="toast-body">
          </div>
      </div>
    `;
  }
}

customElements.define('meal-list', MealList);
