class GallerySection extends HTMLElement {
    connectedCallback() {
const breads = [
    {'name': 'Sourdough Boules', 'image': 'static/images/breads2.jpg', 'size': 'square'},
    {'name': 'Soda Bread', 'image': 'static/images/soda_bread.jpg', 'size': 'landscape'},
    {'name': 'Golden Baguettes', 'image': 'static/images/bread5.jpg', 'size': 'landscape'},
    {'name': 'Seeded Harvest Loaf', 'image': 'static/images/breads3.jpg', 'size': 'square'},
]
    
    this.innerHTML = `
    <section id="gallery" class="py-5 d-flex align-items-center justify-content-center">
        <div class="container-fluid px-4"> 
            <h2 class="text-white text-start mb-4"> Gallery </h2>
            <div class="row g-0 align-items-">${breads.map(bread => `
    <gallery-card 
        src="${bread.image}" 
        imageName="${bread.name}" 
        size="${bread.size}"> </gallery-card>
`).join('')}
            </div>
        </div>
    </section>`
}
}

customElements.define("gallery-section", GallerySection)