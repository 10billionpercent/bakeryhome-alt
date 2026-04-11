class BlogCard extends HTMLElement {
    connectedCallback() {
        const src = this.getAttribute("src")
        const alt = this.getAttribute("alt")
        const blogTitle = this.getAttribute("blogTitle")
        const blogAuthor = this.getAttribute("blogAuthor")
        const blogDesc = this.getAttribute("blogDesc")
        const blogDate = this.getAttribute("blogDate")
    
        const newest = this.getAttribute("newestBlog") === "true"
        const imageVariant = newest ? "large-image" : "medium-image"
        
        const layoutDirection = newest ? "flex-column flex-lg-row" : "flex-column"

        const imgCol = newest ? "col-lg-6 col-12" : "col-12" 
        const textCol = newest ? "col-lg-6 col-12" : "col-12"

        const headingSize = newest ? "display-5" : "h6"

        const backgroundColor = newest ? "var(--bread-dark)" : "var(--bread-brown)"

        this.innerHTML = `
    <div class="mb-3 px-0"> <div class="d-flex ${layoutDirection} align-items-stretch gap-2 gap-lg-3" 
             style="background-color: ${backgroundColor}; border-radius: 0.5rem; padding: 1.25rem; overflow: hidden;">
            
            <div class="row g-0 w-100">
                <div class="${imgCol} d-flex align-items-center justify-content-center">
                    <my-image src="${src}" alt="${alt}" variant="${imageVariant}"></my-image>
                </div>
                <div class="${textCol} d-flex flex-column justify-content-center mt-3 mt-lg-0 ps-lg-4">
                    <h5 class="text-start ${headingSize} mb-1">${blogTitle}</h5>
                    <p class="text-start small mt-2 mb-0"><i class="bi bi-calendar-fill"></i>&emsp;${blogDate}</p>
                    <p class="text-start m-0 small mt-1"><i class="bi bi-feather"></i>&emsp;${blogAuthor}</p>
                    <p class="text-start m-0 lh-sm small mt-2">${blogDesc}</p>
                </div>
            </div>

        </div>
    </div>
`
        
        
    }
}

customElements.define("blog-card", BlogCard)