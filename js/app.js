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
        // console.log(universe);
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
                      <article class="d-flex justify-content-between align-items-center">
                            <div>
                                <h5 class="fw-bold">${universe.name}</h5>
                        <p>Date:${universe.published_in} </p>
                            </div>
                          <div>
                          <button onclick="loadUniverseDetails('${universe.id}')" data-bs-toggle="modal" data-bs-target="#universeDetailsModal"> click</button>
                          </div>
                          
                        </article>
                  </div>
                </div>
        `
        displayContainer.appendChild(universeDiv)
    })
}

const loadUniverseDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
}
// const displayUniverseDetails = universe =>{
//     console.log(universe);
//     const universeDitalsModal = document.getElementById('universeDetailsModalLabel')
//     universeDitalsModal.innerText = universe.name;

// }

// const displayPhoneDetails = phone => {
//     console.log(phone);
//     const modalTitle =document.getElementById('phoneDetailModalLabel');
//     modalTitle.innerText = phone.name;
//     const phoneDetails = document.getElementById('phone-details')
//     phoneDetails.innerHTML = `
//     <p> Relase date : ${phone.releaseDate ? phone.releaseDate : 'No release Date found'} </P>
//     <p> Stroge: ${phone.mainFeatures.storage}</p>
//     <p> Brand: ${phone.brand} </p>
//     `
// }


universeDataLoad();