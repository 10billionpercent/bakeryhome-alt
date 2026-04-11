class BlogSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section id="blogs" class="text-center px-2">
<div class="row g-4 g-md-5 align-items-center px-4">
    <h2 class="text-white text-start poller-one">
        Blog
    </h2>
    <h4 class="text-white text-center">
       Our Newest Blog
    </h4>
    <blog-card 
            newestBlog="true" 
            blogTitle="Desserts with Benefits"
            blogAuthor="Olivia Ava"
            blogDesc="A Boston cream pie is a yellow butter cake that is filled with custard or cream and topped with chocolate glaze."
            blogDate="2 April 2026"
            src="static/images/bostoncream.png">
            </blog-card>
    <h4 class="text-white text-center">
       Older Blogs
    </h4>
<div class="row align-items-start justify-content-center mb-5 ms-1 me-1">
    <blog-card 
        class="col-lg-4 col-md-6" 
        blogTitle="The Greatest Thing Since Sliced Bread"
        blogAuthor="Roberta Johnson"
        blogDesc="Sandwich bread (also referred to as sandwich loaf) is bread that is prepared specifically to be used for the preparation of sandwiches."
        blogDate="1 April 2026"
        src="static/images/single_slice_of_bread_from_fresh_loaf_closeup.jpg">
    </blog-card>

    <blog-card 
        class="col-lg-4 col-md-6" 
        blogTitle="The Joy of (Baking) Soda"
        blogAuthor="Lightnin' Hopkins"
        blogDesc="During the early years of European settlement of the Americas, settlers and some groups of Indigenous peoples of the Americas used soda or pearl ash, more commonly known as potash (pot ash) or potassium carbonate, as a leavening agent (the forerunner to baking soda) in quick breads."
        blogDate="31 March 2026"
        src="static/images/bakingsoda.webp">
    </blog-card>

    <blog-card 
        class="col-lg-4 col-md-6" 
        blogTitle="The Great Icelandic Baking Show"
        blogAuthor="Lightnin' Hopkins"
        blogDesc="Nordic bread culture has existed in Denmark, Finland, Norway, and Sweden from prehistoric time through to the present."
        blogDate="30 March 2026"
        src="static/images/Olandshvedebrod_6082070226.jpg">
    </blog-card>
</div>
<a class="m-0" href="https://static-wagtail-v4-2.netlify.app/blog/"> View more of our blogs </a>
</div>
</section>
`
    }
}

customElements.define("blog-section", BlogSection)