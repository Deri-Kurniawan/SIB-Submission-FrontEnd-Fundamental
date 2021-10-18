/* eslint-disable no-undef */
class AppBar extends HTMLElement {
  connectedCallback() {
    this.classList.add(
      'navbar', 'navbar-expand-md', 'navbar-light', 'bg-light',
    );
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="container">
            <a class="navbar-brand" href="/">DeryMeal</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
              </ul>
            </div>
          </div>
        `;
  }
}

customElements.define('app-bar', AppBar);
