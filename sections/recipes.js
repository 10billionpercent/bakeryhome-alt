class RecipeSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section id="recipes" class="text-center px-2">
    <div class="row g-4 g-md-5 align-items-center mb-5 px-2">
    <h3 class="text-white text-start">
        Recipes
    </h3>
    <recipe-card class="col-lg-4 col-md-6 col-12"
            src="static/images/Hot_cross_buns_stacked.jpg" 
            alt="Hot Cross Buns"
            recipeName="Hot Cross Buns"
            recipeIntro="Hot Cross Buns are a popular and tasty yeasted pastry served before Easter.">
    </recipe-card>
    <recipe-card class="col-lg-4 col-md-6 col-12"
            src="static/images/southern_cornbread.png" 
            alt="Southern Cornbread"
            recipeName="Southern Cornbread"
            recipeIntro="Southern Cornbread is a hearty, unsweetened variety of cornbread.">
    </recipe-card>
    <recipe-card class="col-lg-4 col-md-6 col-12"
            src="static/images/mincemeat_tart.png" 
            alt="Mincemeat Tart"
            recipeName="Mincemeat Tart"
            recipeIntro="Mincemeat Tarts are large (8 inch (20cm) diameter or more) open pastry tarts.">
    </recipe-card>
</div>

    </div>
</section>
`
    }
}

customElements.define("recipe-section", RecipeSection)