class MyImage extends HTMLElement {
    connectedCallback() {
        const src = this.getAttribute("src")
        const alt = this.getAttribute("alt")
        const variant = this.getAttribute("variant")
        this.innerHTML = `
        <img src="${src}" alt="${alt}"
        class="${variant}" />
        `
    }
}

customElements.define("my-image", MyImage)