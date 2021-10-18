/* eslint-disable no-undef */
class SearchBar extends HTMLElement {
  connectedCallback() {
    this.classList.add(
      'form-group',
    );
    this.render();
  }

  render() {
    this.innerHTML = `
      <form class="form-group form-floating" id="formSearchElement">
        <input type="search" class="form-control" id="inputSearchElement" placeholder="Search"/>
        <label class="inputSearchElement">Search</label>
      </form>
    `;
  }
}

customElements.define('search-bar', SearchBar);
