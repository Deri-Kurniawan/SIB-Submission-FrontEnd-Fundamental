class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="card h-100">
              <img src="${this._meal.strMealThumb}" class="card-img-top" alt="${this._meal.strMeal} Thumb">
              <div class="card-body">
                <h5 class="card-title">${this._meal.strMeal}</h5>
                <p class="card-text">${this._meal.strInstructions}</p>
              </div>
            </div>
        `;
  }
}

customElements.define('meal-item', MealItem);