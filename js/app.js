const universeDataLoad = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayUniverse(data.data.tools);
}

const displayUniverse = aiUniverse =>{
    // console.log(aiUniverse);
    const displayContainer = document.getElementById('display-container');
    //display 4 cards 
    

    // document.getElementById('btn-show-all').addEventListener('click', function(){
    //   console.log('click');
    //   const showAll = document.getElementById('show-all');
    //   if(dataLimit && aiUniverse.length > 4){
    //     aiUniverse = aiUniverse.slice(0,4);
    //     showAll.classList.remove('d-none')
    //   }
    //   else{
    //     showAll.classList.add('d-none')
    //   }
    // })




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
                          <button onclick="loadPhoneDetails('${universe.id}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#universeDetailModal"> Show Ditails </button>
                          </div>
                     
                          
                        </article>
                  </div>
                </div>
        `
        displayContainer.appendChild(universeDiv)
    })
}

const loadPhoneDetails = async id => {
  // console.log(id);
  const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`
  const res = await fetch(url);
  const data = await res.json();
  displayPhoneDetails(data.data);
}
const displayPhoneDetails = universeId => {
  console.log(universeId);
  
  // const modalTitle =document.getElementById('phoneDetailModalLabel');
  // modalTitle.innerText = universeId.description;
  const universeDetails = document.getElementById('universe-details')
     universeDetails.innerHTML = `
     <div class="container text-center">
     <div class="row row-cols-2">
 <div class="col bg-danger bg-opacity-10 rounded-3 g-col-6">
       <h4 class="mt-2">${universeId.description}</h4>
       <div class="row row-cols-3 p-2 ">
         <div class="col bg-white rounded-3">${universeId.pricing[0].price}</div>
         <div class="col bg-white rounded-3 ml-2">${universeId.pricing[1].price}</div>
         <div class="col bg-white rounded-3 ml-2">${universeId.pricing[2].price}</div>
       </div>

       <!-- article -->
       <article class="row row-cols-2">
         <div class="col">
             <h4>Features</h4>
             <ul>
                 <li></li>
                 <li>2</li>
                 <li>3</li>
             </ul>
         </div>

         <div class="col">
             <h4>Inegrations</h4>
             <ul>
                 <li>${universeId.integrations[0]}</li>
                 <li>${universeId.integrations[1]}</li>
                 <li>${universeId.integrations[2]}</li>
             </ul>

         </div>

       </article>

 </div>
       


 <div class="col rounded-3 border ml-5">
         <img class="img-fluid mt-2 rounded" src="${universeId.image_link[1]}" alt="">
         <p>${universeId.input_output_examples[0].input}
         </p>
         <p>${universeId.input_output_examples[0].output}
         </p>
     </div>
     </div>
   </div>
  `
  
}


universeDataLoad();