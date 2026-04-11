class GalleryCard extends HTMLElement {
    connectedCallback() {
        const src = this.getAttribute("src")
        const imageName = this.getAttribute("imageName")
        const size = this.getAttribute("size")

        const colClass = size === "square" ? "col-lg-4" : "col-lg-8"

        this.classList.add(
            ...colClass.split(' '),
            'col-12',
            'd-flex',
            'flex-column'
        )

        this.innerHTML = `
            <my-image 
                src="${src}" 
                alt="${imageName}" 
                variant="${size}-gallery">
            </my-image>

            <h4 class="text-white text-start mt-2">
                ${imageName}
            </h4>
        `
    }
}

customElements.define("gallery-card", GalleryCard)