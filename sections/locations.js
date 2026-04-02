class LocationSection extends HTMLElement {
    connectedCallback() {
        const locations = [
        {'name': 'Akranes', 'desc': `Akranes is a port town and municipality on the west coast of Iceland, around 50 km (31 mi) north of the capital Reykjavík.`, 'image': 'static/images/Akranes.jpg'},
        {'name': 'Hof', 'desc': `Hof in Öræfi, is a cluster of farms in the municipality of Sveitarfélagið Hornafjörður in southeast Iceland, close to Vatnajökull glacier, and twenty-two kilometres south of Skaftafell in Vatnajökull National Park. It is on the Route 1 southwest of Höfn, in the narrow strip between the sea coast and the glacier.`, 
        'image': 'static/images/hof-cornell-university-filter.jpg'},
        {'name': 'Höfn', 'desc': `Höfn or Höfn í Hornafirði, is a fishing town in southeastern Iceland. It lies near Hornafjörður fjord.`, 'image': 'static/images/Hofn.jpg'},
        {'name': 'Reykjavík', 'desc': `Reykjavík is the capital and largest city of Iceland. It is located on the southern shore of the Faxaflói bay in southwest Iceland and has a latitude of 64°08′ N, making it the world's northernmost capital of a sovereign state.`, 'image': 'static/images/reykjavik-sverrir-thorolfsson.jpg'},
        {'name': 'Selfoss', 'desc': `Selfoss is a town in southern Iceland on the banks of the Ölfusá river. It is the seat of the municipality of Árborg.`, 'image': 'static/images/aevar-gudmundsson-selfoss.jpg'},
        {'name': 'Vík', 'desc': `Vík, known as Vík í Mýrdal in full, is the southernmost village in Iceland. It is located on the main ring road around the island, and is around 180 km (110 mi) southeast of Reykjavík by road.`, 'image': 'static/images/vik.jpg'}
        ]

        const imageList = JSON.stringify(locations.map(loc => loc.image))

        this.innerHTML = `
<section id="locations" class="text-center py-5">
    <div class="container-fluid px-2"> 
    <h2 class="text-white text-start"> Locations </h2>
    <div class="row g-4 align-items-start mb-5">
            <div class="col-lg-5">
            <h3 id="loc-name" class="text-white text-start display-4">${locations[0].name}</h3>
                <p id="loc-desc" class="text-white text-start lead">${locations[0].desc}</p>
            </div>
            <div class="col-lg-7"> <my-carousel images='${imageList}'></my-carousel>
            </div>
        </div>
    </div>
</section>
`
        setTimeout(() => {
            const carouselEl = this.querySelector('.carousel')
            const nameEl = this.querySelector('#loc-name')
            const descEl = this.querySelector('#loc-desc')

            if (carouselEl) {
                carouselEl.addEventListener('slide.bs.carousel', (event) => {
                    const nextIndex = event.to
                    const data = locations[nextIndex]

                    nameEl.style.opacity = 0
                    descEl.style.opacity = 0
                    
                    setTimeout(() => {
                        nameEl.innerText = data.name
                        descEl.innerText = data.desc
                        nameEl.style.opacity = 1
                        descEl.style.opacity = 1
                    }, 300)
                })
            }
        }, 200)
    }
}

customElements.define("location-section", LocationSection)