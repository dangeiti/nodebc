const apiURL = 'https://swapi.co/api/films/';
const body = document.getElementById('jsonresponse');


fetch(apiURL)
  .then(function(response) {
    if(response.ok){
        
        return response.json();
    }else{
        console.log('failed to fetch')
    }
    
  })
  .then(function(data) {
    // const show = data;
    // console.log(data)
    // console.log(data.results.length)
    for(i = 0; i <= data.results.length - 1; i++){
        let div = document.createElement('div')
        div.innerHTML = `
                        Title: ${data.results[i].title} <br>
                        Episode id: ${data.results[i].episode_id} <br>
                        Release date: ${data.results[i].release_date} <br>
                        <hr>
                        `
        body.appendChild(div)
    }
  });