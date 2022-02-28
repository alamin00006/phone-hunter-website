const searchMe = () =>{
  const searchBox = document.getElementById('search-box').value;
  if(searchBox == ''){
    console.log('hello')
  }
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchBox}`;
  fetch(url)
  .then(res => res.json())
  .then(data => showDisplay(data.data))
  document.getElementById('search-box').value = '';
}
const showDisplay = (phones) =>{
  const divContainer = document.getElementById('div-container');
   for(const phone of phones){
    console.log(phone)
    const div = document.createElement('div');
    div.classList.add('col-lg-4')
    div.classList.add('col-sm-12')
   
    div.innerHTML =`
    <div class="card g-5" style="width: 18rem;">
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <p>${phone.brand}</p>
      <button onclick = "detailsMe('${phone.slug}')">Details</button>
    </div>
  </div>`
   divContainer.appendChild(div);

   }
}

const detailsMe = details=>{
    const url =`
    https://openapi.programming-hero.com/api/phone/${details}`
    fetch(url)
    .then(res => res.json())
    .then(data => showOf(data.data))
}

const showOf = show =>{
    console.log(show)
    const showId = document.getElementById('show');
         showId.innerHTML = '';
    const div = document.createElement('div');
    
    div.innerHTML = `
    <img width = "300px" src="${show.image}" alt="">
     <p> Release Time : ${show.releaseDate}</p>
     <P> Storage : ${show.mainFeatures.storage}</P>
     <P> Display Size : ${show.mainFeatures.displaySize}</P>
     <P> ChipSet : ${show.mainFeatures.chipSet}</P>
     <P class = "fw-bold"> Memory : ${show.mainFeatures.memory}</P>
     `
    
     showId.appendChild(div);
}
