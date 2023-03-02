const universeDataLoad = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayUniverse(data.data.tools);
}

const displayUniverse = aiUniverse =>{
    // console.log(aiUniverse);
    const displayContainer = document.getElementById('display-container');
    aiUniverse.forEach(universe => {
        console.log(universe);
        const universeDiv = document.createElement('div')
        universeDiv.classList.add('col')
        universeDiv.innerHTML = `
        <div class="col">
                  <div class="card h-100">
                    <img class="p-3" src="${universe.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Features</h5>
                      <div class="fw-semibold">
                        <p class="card-text">1.${universe.features[0]}</p>
                      <p class="card-text">2.${universe.features[1]}</p>
                      <p class="card-text">3.${universe.features[2]}</p>
                      <hr>
                      <h5 class="fw-bold">${universe.name}</h5>
                      </div>
                      
                    </div>
                  </div>
                </div>
        `
        displayContainer.appendChild(universeDiv)
    })
}


universeDataLoad();