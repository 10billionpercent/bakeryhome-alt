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
        
        const layoutDirection = newest ? "flex-column flex-lg-row" : "flex-row flex-lg-column"

        const imgCol = newest ? "col-lg-6 col-12" : "col-lg-12 col-5" 
        const textCol = newest ? "col-lg-6 col-12" : "col-lg-12 col-7"

        const headingSize = newest ? "display-5" : "h6"
        
        this.innerHTML = `
    <div class="d-flex ${layoutDirection} align-items-stretch mb-5 gap-3">
        <div class="${imgCol}">
            <my-image src="${src}" alt="${alt}" variant="${imageVariant}"></my-image>
        </div>
        <div class="${textCol} d-flex flex-column justify-content-center ps-2">
            <h5 class="text-white text-start ${headingSize} mb-1 mt-lg-2">${blogTitle}</h5>
            <p class="text-white-50 text-start m-0 small"><strong>By</strong> ${blogAuthor}</p>
            <p class="text-white text-start m-0 lh-sm small">${blogDesc}</p>
            <p class="text-white-50 text-start small mt-2 mb-0">${blogDate}</p>
        </div>
    </div>
`
    }
}

customElements.define("blog-card", BlogCard)