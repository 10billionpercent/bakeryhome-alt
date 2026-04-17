class HeroSection extends HTMLElement {
    connectedCallback() {
        const heroImages = [
            "static/images/hero1.png",
            "static/images/hero2.png",
            "static/images/hero3.png",
            "static/images/hero4.png",
        ]

        const renderHeroImages = (suffix = "") =>
            heroImages
                .map(
                    (src, index) => `
                    <my-image 
                        src="${src}" 
                        alt="Freshly baked bread ${index + 1}"
                        variant="hero-belt-image${suffix}">
                    </my-image>
                `
                )
                .join("")

        this.innerHTML = `
        <section id="hero" class="text-center py-5 mb-4">
            <div class="container">
                
                <div class="hero-image-container d-inline-block position-relative">
                    <div class="hero-belt-viewport">
                        <div class="hero-belt-track">
                            <div class="hero-belt-group">
                                ${renderHeroImages()}
                            </div>
                            <div class="hero-belt-group" aria-hidden="true">
                                ${renderHeroImages("-clone")}
                            </div>
                        </div>
                    </div>
                    
                    <h1 class="display-1 fw-bold text-white hero-overlay-title poller-one">
                        Welcome to the Wagtail Bakery!
                    </h1>
                </div>
                <p class="lead mt-4 px-5">
                    A sample site designed to demonstrate the capabilities of the Wagtail Content Management System.
                </p>
                <p class="fw-bold">
                   An alternative look for the Bakery Demo home page by <a href="https://github.com/10billionpercent" target="_blank">@10billionpercent</a>. 
                </p>
                <cta-button text="Learn more about Wagtail" url="https://wagtail.org/"> </cta-button>
            </div>
        </section>
        `
    }
}

customElements.define("hero-section", HeroSection)
