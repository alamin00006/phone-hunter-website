// Searching Part
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
// phone show display
const showDisplay = (phones) =>{
   
    const search = document.getElementById('search-box');
   if(search.value == phones ){
      document.getElementById('div-container').innerHTML = '';
      document.getElementById('error-handeling').style.display = 'block';
    }
   
   else{
    document.getElementById('error-handeling').style.display = 'none';
    document.getElementById('div-container').innerHTML = '';
    const divContainer = document.getElementById('div-container');
   
      for(const phone of phones.slice(0,20)){
     
        const div = document.createElement('div');
      div.classList.add('col-lg-4')
      div.classList.add('col-sm-12')
     
      div.innerHTML =`
      <div class="card g-5" style="width: 18rem;">
      <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p> Brand : ${phone.brand}</p>
        <button class ="bg-success text-white px-3 fs-5 rounded" onclick = "detailsMe('${phone.slug}')">Details</button>
      </div>
    </div>`
     divContainer.appendChild(div);
         
     }
   }
   
}
// Details phone part
const detailsMe = details=>{
    const url =`
    https://openapi.programming-hero.com/api/phone/${details}`
    fetch(url)
    .then(res => res.json())
    .then(data => showOf(data.data))
}
 
const showOf = detailsShow =>{
    console.log(show)
    const showId = document.getElementById('show');
         showId.innerHTML = '';
    const div = document.createElement('div');
 
    div.innerHTML = `
   
    <img width = "300px" src="${detailsShow .image}" alt="">
   
     <P> <span class = "fw-bold">Name</span> : ${detailsShow.name}</P>
     <P> <span class = "fw-bold">Storage</span> : ${detailsShow.mainFeatures.storage}</P>
     <P> <span class = "fw-bold">Display Size</span>  : ${detailsShow.mainFeatures.displaySize}</P>
     <P> <span class = "fw-bold">ChipSet</span> : ${detailsShow.mainFeatures.chipSet}</P>
     <P> <span class = "fw-bold">Memory</span> : ${detailsShow.mainFeatures.memory}</P>
     <div > <span class = "fw-bold">Others</span> : <p>${detailsShow.others.WLAN}</p>
     <p>bluetooth : ${detailsShow.others.Bluetooth} </p>
     <p>GPS : ${detailsShow.others.GPS}</p>
     <p>NFC : ${detailsShow.others.NFC}</p>
     <p>Radio : ${detailsShow.others.Radio}</p>
     
      </div>
     <p> <span class = "fw-bold">Sensor Show</span> : ${detailsShow.mainFeatures.sensors} </p>
   
     `
    //  release time error handeling
     const p = document.createElement('p');
         
          if(p.innerText ==detailsShow.releaseDate){
            p.innerText = 'Relese time not found';
         
          }
          else if (p.innerText== ''){
            p.innerText = `${detailsShow.releaseDate}`;
           
          }
          div.appendChild(p);
          showId.appendChild(div);
             
}
 
 
 
 

