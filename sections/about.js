class AboutSection extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
    <section id="about" class="py-5">
        <div class="container-fluid px-4"> 
        <div class="row g-4 g-md-5 align-items-stretch mb-5 px-2">
            <h2 class="text-white text-start mb-4 amarante"> About Us </h2>
            <div class="row g-0 px-4">
            <div class="col-xl-6 d-flex flex-column">
            <h4 class="text-white text-start">
            Things to know about this demo site
            </h4>
             <p class="text-white text-start"> If you've gotten this far, congratulations - you're running an instance of a killer content management system written for and on top of Django, <i>the framework for perfectionists with deadlines.</i></p>
             <h5 class="text-white text-start">What does Wagtail get you that Django alone does not?</h5>
             <ul class="text-white text-start">
             <li>Focus on content creators/managers, rather than developers (but developer-friendly!)</li>
             <li>"Page-centric" content modeling</li>
             <li>Beautiful, modern, intuitive user interface optimized for content people</li>
             <li>Super-powerful hierarchical content management ("content trees")</li>
             <li>User- and group-based permissions system attached to content hierarchies</li>
             <li>Flexible image resizing with a ton of image display helpers</li>
             <li>Innovative "<a href="https://torchbox.com/blog/rich-text-fields-and-faster-horses/">StreamFields</a>" as an alternative to traditional "anything goes" rich text fields</li>
             <li>Intuitive choosers for embedded Pages, Images, Documents and other content</li>
             <li>Native integration with ElasticSearch to help you build powerful search features</li>
             <li>Template tags to help create image renditions, smart links, and to navigate content trees</li>
             </ul>
             </div>
            <div class="col-xl-6 d-flex flex-column">
            <div class="contact-image-wrapper flex-grow-1 mb-3">
            <my-image src="static/images/sprint_crew.jpg"
                alt="Sprint Crew" 
                class="h-100">
            </my-image>
            </div>
        </div>
        <div class="col-xl-6 d-flex flex-column">
        <p class="text-white text-start"> If you're new to Wagtail, there are two primary paths to learning:</p>
        <ul class="text-white text-start">
        <li>The source code that powers this demo site</li>
        <li>The official <a href="https://docs.wagtail.org/en/stable/getting_started/index.html">tutorial</a></li>
        </ul>
        </div>
        </div>
    </section>`
}
}

customElements.define("about-section", AboutSection)