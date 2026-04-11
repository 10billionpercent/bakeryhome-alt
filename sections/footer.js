class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="footer" class="container-fluid py-4 px-4">
            <div class="flex row align-items-start">
                <div class="col-12">
                    <ul class="list-inline mb-2">
                        <li class="list-inline-item">
                            <a href="https://github.com/10billionpercent" target="_blank" rel="noreferrer">
                                <i class="bi bi-github"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="https://www.linkedin.com/in/shreya-v3012/" target="_blank" rel="noreferrer">
                                <i class="bi bi-linkedin"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="mailto:shreya501711@gmail.com">
                                <i class="bi bi-envelope-fill"></i>
                            </a>
                        </li>
                    </ul>
                    
                    <p class="small">
                        View the source code <a href="https://github.com/10billionpercent/bakeryhome-alt" target="_blank">here</a>. Styling in progress.
                    </p>
                </div>
            </div>
        </footer>`
    }
}

customElements.define("my-footer", MyFooter)