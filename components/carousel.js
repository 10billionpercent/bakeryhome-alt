class MyCarousel extends HTMLElement {
    connectedCallback() {
        const uniqueId = "carousel-" + Math.random().toString(36).substr(2, 9);
        const imagesRaw = this.getAttribute("images");
        const images = JSON.parse(imagesRaw || "[]");

        if (images.length === 0) return;

        const slides = images.map((img, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <my-image src="${img}" variant="medium-image" alt="Bakery Image">
                </my-image>
            </div>
        `).join('');

this.innerHTML = `
    <div id="${uniqueId}" class="carousel slide px-2"> 
        <button class="carousel-control-prev" type="button">
            <span class="carousel-control-prev-icon"></span>
        </button>

        <div class="carousel-inner">
            ${slides}
        </div>

        <button class="carousel-control-next" type="button">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>
`;

        setTimeout(() => {
            const el = document.getElementById(uniqueId);
            if (window.bootstrap && el) {
                // 1. Initialize the carousel instance
                const carouselInstance = new window.bootstrap.Carousel(el, {
                    interval: false, // Static, just like you wanted
                    ride: false
                });

                // 2. Manually tell the buttons what to do
                this.querySelector('.carousel-control-prev').onclick = () => carouselInstance.prev();
                this.querySelector('.carousel-control-next').onclick = () => carouselInstance.next();
            }
        }, 100);
    }
}

customElements.define("my-carousel", MyCarousel);