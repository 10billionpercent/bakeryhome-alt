class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container py-2 px-3">

    <a class="navbar-brand" href="#hero">The Wagtail Bakery</a>

    <button class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
  <li class="nav-item">
    <a class="nav-link" href="#breads">Breads</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="#locations">Locations</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="#blog">Blog</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="#recipes">Recipes</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="#gallery">Gallery</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="#contact">Contact Us</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="#about">About</a>
  </li>

</ul>

    </div>

  </div>
</nav>
        `
    }
}

customElements.define("my-navbar", MyNavbar)