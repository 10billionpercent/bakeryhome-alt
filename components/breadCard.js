class BreadCard extends HTMLElement {
    connectedCallback() {
        const src = this.getAttribute("src")
        const alt = this.getAttribute("alt")
        const breadName = this.getAttribute("breadName")
        const breadType = this.getAttribute("breadType")
        const breadLocation = this.getAttribute("breadLocation")
        this.innerHTML = `
    <div class="d-flex flex-column justify-content-center align-items-center">
        <h4 class="text-white text-start">${breadName}</h4>
        <p class="text-white text-start"> <i class="bi bi-tags-fill"></i> ${breadType} </p>
        <my-image src="${src}" alt="${alt}" variant="thumbnail-image"></my-image>
        <p class="text-white text-start mt-2"> <i class="bi bi-geo-alt-fill"></i> ${breadLocation} </p>
    </div>
`
    }
}

customElements.define("bread-card", BreadCard)