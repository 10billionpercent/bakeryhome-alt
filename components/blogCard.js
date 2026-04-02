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
        
        this.innerHTML = `
    <div class="d-flex ${layoutDirection} align-items-stretch mb-5 gap-3 px-2">
        <div class="${imgCol}">
            <my-image src="${src}" alt="${alt}" variant="${imageVariant}"></my-image>
        </div>
        <div class="${textCol} d-flex flex-column justify-content-center">
            <h5 class="text-white text-start ${headingSize} mb-1 mt-2">${blogTitle}</h5>
            <p class="text-white-50 text-start small mt-2 mb-0"><i class="bi bi-calendar-fill"></i>&emsp;${blogDate}</p>
            <p class="text-white text-start m-0 small mt-1"><i class="bi bi-feather"></i>&emsp;${blogAuthor}</p>
            <p class="text-white-85 text-start m-0 lh-sm small">${blogDesc}</p>
        </div>
    </div>
`
    }
}

customElements.define("blog-card", BlogCard)