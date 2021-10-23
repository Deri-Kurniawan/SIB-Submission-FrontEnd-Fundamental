/* eslint-disable no-undef */
class AppBar extends HTMLElement {
  connectedCallback() {
    this.classList.add(
      'navbar', 'navbar-expand-md', 'navbar-dark', 'sticky-top', 'top-0',
    );
    this.setAttribute('style', 'transition: 0.1s all; background-color:#FF8377;');
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <a class="navbar-brand text-uppercase" href="/">Derizer Meal Recipes</a>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
