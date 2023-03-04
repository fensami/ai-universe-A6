const universeDataLoad = async (dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayUniverse(data.data.tools,dataLimit);
}

const displayUniverse = aiUniverse =>{
    // console.log(aiUniverse);
    const displayContainer = document.getElementById('display-container');
    //show all data
    const showAll = document.getElementById('show-all')
    if(universeDataLoad || aiUniverse.length > 13){
      aiUniverse = aiUniverse.slice(0,13);
      showAll.classList.remove('d-none')
    }
    else{
      showAll.classList.add('d-none')
    }
    const dataProsecce = (dataLimit)=>{
      universeDataLoad(dataLimit)
    }
    document.getElementById('btn-show-all').addEventListener('click', function(){
      toggleSpinner(true)
     dataProsecce(10)
    })




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
                            
                            <p class="d-flex justify-content-between align-items-center"><span class="material-symbols-outlined">
                            calendar_month
                            </span>${universe.published_in} </p>
                            </div>
                           
                          <div>
                          <div onclick="loadPhoneDetails('${universe.id}')" href="#" class="" data-bs-toggle="modal" data-bs-target="#universeDetailModal"> <span class="material-symbols-outlined">
                          chevron_right
                          </span></div>
                          </div>
                     
                          
                        </article>
                  </div>
                </div>
        `
        displayContainer.appendChild(universeDiv)
    })
    toggleSpinner(false)
}

// data load form id with dynamic and using modal
const loadPhoneDetails = async id => {
  // console.log(id);
  const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`
  const res = await fetch(url);
  const data = await res.json();
  displayPhoneDetails(data.data);
}
const displayPhoneDetails = universeId => {
  console.log(universeId);
  const universeDetails = document.getElementById('universe-details')
     universeDetails.innerHTML = `
     <div class="container ">
     <div class="row row-cols-2">
 <div class="col bg-danger bg-opacity-10 rounded-3 g-col-6">
       <h4 class="mt-2">${universeId.description ? universeId.description: 'No More Details'}</h4>
       <div class="row row-cols-3 p-2 ">
         <div class="col bg-white rounded-3">${universeId.pricing[0].price ? universeId.pricing[0].price: 'No Price Found'}</div>
         <div class="col bg-white rounded-3 ml-2">${universeId.pricing[1].price}</div>
         <div class="col bg-white rounded-3 ml-2">${universeId.pricing[2].price}</div>
       </div>

       <!-- article -->
       <article class="row row-cols-2">
         <div class="col mt-3">
             <h4>Features</h4>
             <ul>
                 <li>${universeId.features[1].feature_name}</li>
                 <li>${universeId.features[2].feature_name}</li>
                 <li>${universeId.features[3].feature_name}</li>
             </ul>
         </div>

         <div class="col mt-3">
             <h4>Inegrations</h4>
             <ul>
                 <li>${universeId.integrations[0] ? universeId.integrations[0]: 'No data found' }</li>
                 <li>${universeId.integrations[1] ? universeId.integrations[1]: 'No data found' }</li>
                 <li>${universeId.integrations[2] ? universeId.integrations[2]: 'No data found'}</li>
             </ul>

         </div>

       </article>

 </div>
       


 <div class="col rounded-3 border ml-5 text-center">
         <img class="img-fluid mt-2 rounded" src="${universeId.image_link[0] ? universeId.image_link[0]: 'No images Found'}" alt="">
         <p>${universeId.input_output_examples[0].input}
         </p>
         <p>${universeId.input_output_examples[0].output ? universeId.input_output_examples[0].output: 'No! Not Yet! Take a break!!!'}
         </p>
     </div>
     </div>
   </div>
  `
  
}

// loader spinner
const toggleSpinner = isLoading =>{
  const loaderSection = document.getElementById('loader-spinner')
  if(isLoading){
    loaderSection.classList.remove('d-none')
  }
  else{
    loaderSection.classList.add('d-none')
  }
}


universeDataLoad();