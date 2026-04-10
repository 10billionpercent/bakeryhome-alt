class HeroSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="hero" class="text-center py-5">
            <div class="container">
                
                <div class="hero-image-container d-inline-block position-relative">
                    
                    <my-image 
                        src="static/images/hero_image.png" 
                        alt="Delicious Sourdough">
                        variant="hero-image"
                    </my-image>
                    
                    <h1 class="display-1 fw-bold text-white hero-overlay-title">
                        Welcome to the Wagtail Bakery!
                    </h1>
                </div>
                <p class="lead text-white-50 mt-4 px-5">
                    A sample site designed to demonstrate the capabilities of the Wagtail Content Management System.
                </p>
                <p class="text-white-50 small">
                   An alternative look for the Bakery Demo home page by <a href="https://github.com/10billionpercent" target="_blank" class="text-white">@10billionpercent</a>. Styling in progress.
                </p>
                <cta-button text="Learn more about Wagtail" url="https://wagtail.org/"> </cta-button>
            </div>
        </section>
        `
    }
}

customElements.define("hero-section", HeroSection)