class BreadSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section id="breads" class="text-center py-5">
    <div class="container">
        <div class="row g-4 g-md-5 align-items-center mb-5">
                <h2 class="text-white text-start">
                  <b>Bread</b>&nbsp;is a&nbsp;<a href="https://en.wikipedia.org/wiki/Staple_food">staple food</a>&nbsp;prepared from a&nbsp;<a href="https://en.wikipedia.org/wiki/Dough">dough</a>&nbsp;of&nbsp;<a href="https://en.wikipedia.org/wiki/Flour">flour</a>&nbsp;and&nbsp;<a href="https://en.wikipedia.org/wiki/Water">water</a>, usually by&nbsp;<a href="https://en.wikipedia.org/wiki/Baking">baking</a>. Throughout recorded history it has been popular around the world and is one of the oldest artificial foods, having been of importance since the dawn of&nbsp;<a href="https://en.wikipedia.org/wiki/Agriculture#History">agriculture</a>.              
                </h2>
            </div>
        </div>
        <div class="row g-4 g-md-5 align-items-center mb-5">
        <div class="col-lg-6">
        <my-image 
                src="static/images/mixed_variety_of_traditional_european_sourdough_and_rye_round_bread_loaves.jpg" 
                alt="Mixed Variety of Traditional European Sourdough and Rye Bread Loaves"
                variant="large-image">
        </my-image>
        </div>
        <div class="col-lg-6 text-white text-start">
        <p>Proportions of types of flour and other ingredients vary widely, as do modes of preparation. As a result, types, shapes, sizes, and textures of breads differ around the world. Bread may be&nbsp;<a href="https://en.wikipedia.org/wiki/Leaven">leavened</a>&nbsp;by processes such as reliance on naturally occurring&nbsp;<a href="https://en.wikipedia.org/wiki/Sourdough">sourdough</a>&nbsp;microbes, chemicals, industrially produced yeast, or high-pressure aeration. Some bread is cooked before it can leaven, including for traditional or religious reasons. Non-cereal ingredients such as fruits, nuts and fats may be included. Commercial bread commonly contains additives to improve flavor, texture, color, shelf life, and ease of manufacturing.</p>
        <h3 class="text-white text-start">
        Our most excellent bread
        </h3>
        <p> 
        There's a lot that we can say about our bread but frankly we think you need to taste it to believe it. Crafted from lines of Python, Django and the old staples of HTML, CSS and JS we think you'll love what we're baking. With our demonstrations across our fair Island you're never far from a treat. Come visit us whenever you're nearby.
        </p>
        </div>
        </div>
       <div class="row g-4 g-md-5 align-items-center mb-5">
    <h3 class="text-white text-start">
        Some of our breads
    </h3>
    <my-card class="col-lg-4 col-md-6 col-12"
            src="static/images/Anadama_bread_1.jpg" 
            alt="Anadama"
            breadName="Anadama"
            breadType="Yeast bread"
            breadLocation="United States (New England)">
    </my-card>
    <my-card class="col-lg-4 col-md-6 col-12"
            src="static/images/Bean-jam-bunanpankatori-cityjapan.jpg" 
            alt="Anpan"
            breadName="Anpan"
            breadType="Sweet bun"
            breadLocation="Japan">
    </my-card>
    <my-card class="col-lg-4 col-md-6 col-12"
            src="static/images/Anadama_bread_1.jpg" 
            alt="Appam"
            breadName="Appam"
            breadType="Various Types"
            breadLocation="India (Kerala), Sri Lanka">
    </my-card>
</div>

    </div>
</section>
`
    }
}

customElements.define("bread-section", BreadSection)