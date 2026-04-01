class RecipeCard extends HTMLElement {
    connectedCallback() {
        const src = this.getAttribute("src")
        const alt = this.getAttribute("alt")
        const recipeName = this.getAttribute("recipeName")
        const recipeIntro = this.getAttribute("recipeIntro")
        this.innerHTML = `
    <div class="d-flex flex-column justify-content-center align-items-center">
        <h4 class="text-white text-start">${recipeName}</h4>
        <my-image src="${src}" alt="${alt}" variant="small-image"></my-image>
        <p class="text-white text-start mt-2"> <i class="bi bi-fork-knife"></i> ${recipeIntro} </p>
    </div>
`
    }
}

customElements.define("recipe-card", RecipeCard)