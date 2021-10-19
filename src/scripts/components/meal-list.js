class MealList extends HTMLElement {
    constructor() {
        super();
        this.classList.add('row', 'row-cols-1', 'row-cols-2', 'row-cols-sm-3', 'row-cols-md-4', 'row-cols-lg-5', 'row-cols-xl-5', 'g-4');
    }

    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._meals.forEach((meal) => {
            const mealItemElement = document.createElement('meal-item');
            mealItemElement.classList.add("col", 'ajax-loading');
            mealItemElement.meal = meal;
            this.appendChild(mealItemElement);
        });
    }

    set renderError(message) {
        this.innerHTML = '';
        this.innerHTML = `
        <div class="alert alert-danger">
            <h1 class="d-block">${message}</h1>
        </div>
        `;
    }
}

customElements.define('meal-list', MealList);