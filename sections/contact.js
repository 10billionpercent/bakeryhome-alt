class ContactSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="contact" class="py-4 px-4">
            <h2 class="text-white text-start mb-4 poller-one"> Contact Us </h2>
            <form id="contactForm"> 
            <div class="row g-4 g-md-5 align-items-stretch px-2">
                <div class="col-xl-6 d-xl-flex">
                    <div class="contact-image-wrapper flex-grow-1">
                        <my-image src="static/images/Sourdough_rye_with_walnuts.jpg"
                                  alt="Sourdough Rye with Walnuts">
                        </my-image>
                        <p class="text-white text-start col-12 mt-4"> 
                    We'd love to hear from you! Drop us a line to let us know what you liked or didn't like about your recent store visit.
                </p>
                    </div>
                </div>

                <div class="col-xl-6 d-xl-flex flex-column align-items-start text-start">
                    <label for="subject" class="form-label">
                        Subject <span class="required">*</span>
                    </label>
                    <input type="text" class="form-control mb-3" id="subject" required>

                    <label for="name" class="form-label">
                        Your Name <span class="required">*</span>
                    </label>
                    <input type="text" class="form-control mb-3" id="name" required>

                    <label for="email" class="form-label">
                        Your Email <span class="required">*</span>
                    </label>
                    <input type="email" class="form-control mb-3" id="email" required>

                    <label for="purpose" class="form-label">Purpose</label>
                    <select class="form-select border-secondary mb-3" id="purpose">
                        <option value="1">Comment</option>
                        <option value="2">Question</option>
                        <option value="3">Feedback</option>
                    </select>    

                    <label for="message" class="form-label">
                        Your Message <span class="required">*</span>
                    </label>
                    <textarea class="form-control mb-4" rows="5" id="message" required></textarea>                   
                    
                    <cta-button text="Submit" url="#"></cta-button>
                </div>
            </div>
        </form>
        </section>
        `
    }
}
customElements.define("contact-section", ContactSection)