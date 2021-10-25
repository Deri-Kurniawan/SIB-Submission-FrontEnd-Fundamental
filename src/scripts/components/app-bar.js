/* eslint-disable no-undef */
class AppBar extends HTMLElement {
  connectedCallback() {
    this.classList.add(
      'navbar', 'navbar-expand-sm', 'navbar-dark', 'sticky-top', 'top-0',
    );
    this.setAttribute('style', 'transition: 0.1s all; background-color:#FF8377;');
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <a class="navbar-brand text-uppercase" href="/">Derizer Meal Recipes</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div class="d-flex">
            <form class="input-group" style="display:none">
              <input type="search" class="form-control" id="inputSearchElementAlternate" placeholder="Search by meal name">
              <button type="submit" class="btn">🔍</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
