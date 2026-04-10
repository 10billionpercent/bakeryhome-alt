class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
          <div class="container py-2 px-3">
            <a class="navbar-brand amarante" href="#hero">The Wagtail Bakery</a>
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="#breads">Breads</a></li>
                <li class="nav-item"><a class="nav-link" href="#locations">Locations</a></li>
                <li class="nav-item"><a class="nav-link" href="#blogs">Blog</a></li>
                <li class="nav-item"><a class="nav-link" href="#recipes">Recipes</a></li>
                <li class="nav-item"><a class="nav-link" href="#gallery">Gallery</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact Us</a></li>
                <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
              </ul>
            </div>
          </div>
        </nav>`

        const btn = this.querySelector('.navbar-toggler')
        const menu = this.querySelector('#navbarNav')

        if (btn && menu) {
            btn.addEventListener('click', () => {
                if (menu.classList.contains('show')) {
                    menu.classList.remove('show')
                } else {
                    menu.classList.add('show')
                }
            })
        }
    }
}

customElements.define("my-navbar", MyNavbar)