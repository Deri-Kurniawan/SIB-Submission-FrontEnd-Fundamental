/* eslint-disable no-undef */
class SearchBar extends HTMLElement {
  connectedCallback() {
    this.classList.add('mt-4');
    this.render();
  }

  render() {
    this.innerHTML = `
      <form class="form-floating">
        <input type="search" class="form-control" id="inputSearchElement" value="" placeholder="Search recipe"/>
        <label class="inputSearchElement">Search recipe by food name</label>
      </form>
    `;
  }
}

customElements.define('search-bar', SearchBar);
