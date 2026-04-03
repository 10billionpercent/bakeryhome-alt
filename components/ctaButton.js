class CtaButton extends HTMLElement {
    connectedCallback() {
        const text = this.getAttribute("text")
        const url = this.getAttribute("url")
        
        this.innerHTML = `
        <a href="${url}" target="_blank" class="text-decoration-none">
        <button class="btn btn-primary px-4 py-2 rounded-2 shadow-sm"> 
        ${text} 
        </button>
        </a>
        `
    }
}

customElements.define("cta-button", CtaButton)