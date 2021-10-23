/* eslint-disable no-undef */
class SearchBar extends HTMLElement {
  connectedCallback() {
    this.classList.add('mt-4');
    this.render();
  }

  render() {
    this.innerHTML = `
      <form class="form-floating">
        <input type="search" class="form-control" id="inputSearchElement" placeholder="Search by meal name"/>
        <label for="inputSearchElement" class="text-truncate col-12">Search by meal name</label>
      </form>
    `;
  }
}

customElements.define('search-bar', SearchBar);
