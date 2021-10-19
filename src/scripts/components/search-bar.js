class SearchBar extends HTMLElement {
  connectedCallback() {
    this.classList.add('form-group', 'col-4', 'offset-4');
    this.render();
  }

  render() {
    this.innerHTML = `
      <form class="form-floating">
        <input type="search" class="form-control" id="inputSearchElement" value="" placeholder="Search recipe"/>
        <label class="inputSearchElement">Search recipe</label>
      </form>
    `;
  }
}

customElements.define('search-bar', SearchBar);