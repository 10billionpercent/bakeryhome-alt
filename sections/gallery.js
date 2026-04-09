class GallerySection extends HTMLElement {
    connectedCallback() {

const breads = [
    {name: 'Sourdough Boules', image: 'static/images/breads2.jpg', size: 'square'},
    {name: 'Soda Bread', image: 'static/images/soda_bread.jpg', size: 'landscape'},
    {name: 'Golden Baguettes', image: 'static/images/bread5.jpg', size: 'landscape'},
    {name: 'Seeded Harvest Loaf', image: 'static/images/breads3.jpg', size: 'square'},
]

const rows = []
for (let i = 0; i < breads.length; i += 2) {
    rows.push(breads.slice(i, i + 2))
}

this.innerHTML = `
<section id="gallery" class="py-5">
    <div class="container-fluid px-4">
        <h2 class="text-white text-start mb-4">Gallery</h2>

        ${rows.map((row, index) => `
            <div class="row g-4 align-items-start mb-4 px-4">

                ${index % 2 === 0 ? `
                    <gallery-card 
                        src="${row[0].image}"
                        imageName="${row[0].name}"
                        size="square">
                    </gallery-card>

                    <gallery-card 
                        src="${row[1].image}"
                        imageName="${row[1].name}"
                        size="landscape">
                    </gallery-card>
                ` : `
                    <gallery-card 
                        src="${row[0].image}"
                        imageName="${row[0].name}"
                        size="landscape">
                    </gallery-card>

                    <gallery-card 
                        src="${row[1].image}"
                        imageName="${row[1].name}"
                        size="square">
                    </gallery-card>
                `}

            </div>
        `).join('')}

    </div>

    <a class="ms-4" 
       href="https://static-wagtail-v4-2.netlify.app/gallery/" 
       rel="noopener noreferrer">
       View more of our gallery
    </a>

</section>
`
    }
}

customElements.define("gallery-section", GallerySection)