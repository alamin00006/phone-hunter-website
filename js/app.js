const searchMe = () =>{

  const search = document.getElementById('search-box');
  const searchBox = search.value;
  document.getElementById('error-handeling').style.display = 'none';
     const url = `https://openapi.programming-hero.com/api/phones?search=${searchBox}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showDisplay(data.data)) 
    document.getElementById('search-box').value = '';
}

const showDisplay = (phones) =>{
    // console.log(phones)
    const search = document.getElementById('search-box');
    if(search.value == phones){
      document.getElementById('div-container').innerHTML = '';
      document.getElementById('error-handeling').style.display = 'block';
    }
   else{
    document.getElementById('error-handeling').style.display = 'none';
    document.getElementById('div-container').innerHTML = '';
    const divContainer = document.getElementById('div-container');
     
      for(const phone of phones){
       const div = document.createElement('div');
      div.classList.add('col-lg-4')
      div.classList.add('col-sm-12')
     
      div.innerHTML =`
      <div class="card g-5" style="width: 18rem;">
      <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p>${phone.brand}</p>
        <button class ="bg-success text-white" onclick = "detailsMe('${phone.slug}')">Details</button>
      </div>
    </div>`
     divContainer.appendChild(div);
   
      
     }
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
    
     <P> Storage : ${show.mainFeatures.storage}</P>
     <P> Display Size : ${show.mainFeatures.displaySize}</P>
     <P> ChipSet : ${show.mainFeatures.chipSet}</P>
     <P class = "fw-bold"> Memory : ${show.mainFeatures.memory}</P>

     <P> Others : ${show.others.WLAN}, bluetooth : ${show.others.Bluetooth}, GPS : ${show.others.GPS}, NFC : ${show.others.NFC}, Radio : ${show.others.Radio} </P>
     <p> Sensor Show : ${show.mainFeatures.sensors} </p>
     `
     const p = document.createElement('p');
          p.innerText = `'release', showReles(${show.releaseDate});`
          div.appendChild(p);
     showId.appendChild(div);
     
}
const showReles = (releas) =>{
console.log(releas);
}
